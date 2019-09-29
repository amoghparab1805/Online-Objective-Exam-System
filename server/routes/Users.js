const express = require('express')
const users = express.Router()
const cors = require('cors')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const User = require('../models/User')
users.use(cors())

const Student = require('../models/Student')
const Professor = require('../models/Professor')
const PhoneNumber = require('../models/PhoneNumber')

process.env.SECRET_KEY = 'secret'

users.post('/student-register', (req, res) => {
  const today = new Date()
  const userData = {
    SAP_id: req.body.SAP_id,
    email_id: req.body.email_id,
    first_name: req.body.first_name,
    middle_name: req.body.middle_name,
    last_name: req.body.last_name,
    password: req.body.password,
    user_type_id: req.body.user_type_id,
  }

  User.findOne({
    where: {
      SAP_id: req.body.SAP_id
    }
  })
    //TODO bcrypt
    .then(user => {
      if (!user) {
        bcrypt.hash(req.body.password, 10, (err, hash) => {
          userData.password = hash
          User.create(userData)
            .then(user => {
              Student.create({division:req.body.division, user_id: user.user_id})
                .then(student => {
                  PhoneNumber.create({phone_number: req.body.phone_number, user_id: user.user_id})
                    .then(phoneNo => {
                      res.json({ status: phoneNo.user_id + ' Phone Number Added' })
                    })
                    .catch(err => {
                      res.send('error: ' + err)
                    })
                })
                .catch(err => {
                  res.send('error: ' + err)
                })
            })
            .catch(err => {
              res.send('error: ' + err)
            })
        })
      } else {
        res.json({ error: 'User already exists' })
      }
    })
    .catch(err => {
      res.send('error: ' + err)
    })
})

users.post('/professor-register', (req, res) => {
  const today = new Date()
  const userData = {
    SAP_id: req.body.SAP_id,
    email_id: req.body.email_id,
    first_name: req.body.first_name,
    middle_name: req.body.middle_name,
    last_name: req.body.last_name,
    password: req.body.password,
    user_type_id: req.body.user_type_id
  }
  
  User.findOne({
    where: {
      SAP_id: req.body.SAP_id
    }
  })
    //TODO bcrypt
    .then(user => {
      if (!user) {
        bcrypt.hash(req.body.password, 10, (err, hash) => {
          userData.password = hash
          User.create(userData)
            .then(user => {
              Professor.create({subject_id:req.body.subject_id, department: req.body.department, user_id: user.user_id})
                .then(professor => {
                  PhoneNumber.create({phone_number: req.body.phone_number, user_id: user.user_id})
                    .then(phoneNo => {
                      res.json({ status: phoneNo.user_id + ' Phone Number Added' })
                    })
                    .catch(err => {
                      res.send('error: ' + err)
                    })
                })
                .catch(err => {
                  res.send('error: ' + err)
                })
            })
            .catch(err => {
              res.send('error: ' + err)
            })
        })
      } else {
        res.json({ error: 'User already exists' })
      }
    })
    .catch(err => {
      res.send('error: ' + err)
    })
})

users.post('/login', (req, res) => {
  User.findOne({
    where: {
      SAP_id: req.body.SAP_id
    }
  })
    .then(user => {
      if (user) {
        if (bcrypt.compareSync(req.body.password, user.password)) {
          let token = jwt.sign(user.dataValues, process.env.SECRET_KEY, {
            expiresIn: 1440
          })
          res.send(token)
        }
      } else {
        res.status(400).json({ error: 'User does not exist' })
      }
    })
    .catch(err => {
      res.status(400).json({ error: err })
    })
})

users.get('/student-dashboard', (req, res) => {
  var decoded = jwt.verify(req.headers['authorization'], process.env.SECRET_KEY)

  User.findOne({
    where: {
      id: decoded.id
    }
  })
    .then(user => {
      if (user) {
        res.json(user)
      } else {
        res.send('User does not exist')
      }
    })
    .catch(err => {
      res.send('error: ' + err)
    })
})

users.get('/professor-dashboard', (req, res) => {
  var decoded = jwt.verify(req.headers['authorization'], process.env.SECRET_KEY)

  User.findOne({
    where: {
      id: decoded.id
    }
  })
    .then(user => {
      if (user) {
        res.json(user)
      } else {
        res.send('User does not exist')
      }
    })
    .catch(err => {
      res.send('error: ' + err)
    })
})

users.get('/professor-details/:user_id', (req, res) => {
  Professor.findOne({
    where: {
      user_id: req.params.user_id
    }
  }).then(professor => res.json(professor))
})

module.exports = users