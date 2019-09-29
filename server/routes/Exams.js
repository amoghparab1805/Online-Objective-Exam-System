const express = require('express')
const exams = express.Router()
const cors = require('cors')

const Exam = require('../models/Exam')
exams.use(cors())

const Question = require('../models/Question')

process.env.SECRET_KEY = 'secret'

exams.post('/new-paper', (req, res) => {
  const today = new Date()
  const paperData = {
    subject_id: req.body.subject_id,
    prof_id: req.body.prof_id,
  }

  Exam.create(paperData)
    .then(paper => {
      res.json({ paper })
    })
    .catch(err => {
      res.send('error: ' + err)
    })
});

exams.post('/add-question', (req, res) => {
  const today = new Date()
  const questionData = {
    question: req.body.question,
    A: req.body.A,
    B: req.body.B,
    C: req.body.C,
    D: req.body.D,
    right_answer: req.body.right_answer,
    paper_id: req.body.paper_id
  }
  
  Question.create(questionData)
    .then(ques => {
      res.json({ status: ques.question_id + ' Question Added' })
    })
    .catch(err => {
      res.send('error: ' + err)
    })
});

exams.get('/list-paper/:prof_id/:subject_id', (req, res) => {
  Exam.findAll({
    where: {
      prof_id: req.params.prof_id,
      subject_id: req.params.subject_id
    }
  }).then(paperList => res.json(paperList))
})

exams.get('/list-question/:paper_id', (req, res) => {
  Question.findAll({
    where: {
      paper_id: req.params.paper_id,
    }
  }).then(questionList => res.json(questionList))
})

module.exports = exams