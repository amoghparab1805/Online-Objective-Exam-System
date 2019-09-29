const express = require('express')
const subjects = express.Router()
const cors = require('cors')

const Subject = require('../models/Subject')
subjects.use(cors())

subjects.get('/', (req, res) => {
    Subject.findAll().then(subjectList => res.json(subjectList))
})

module.exports = subjects