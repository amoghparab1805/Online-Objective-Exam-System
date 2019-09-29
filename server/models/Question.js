const Sequelize = require('sequelize')
const db = require('../database/db.js')

module.exports = db.sequelize.define(
  'question',
  {
    question_id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    question: {
      type: Sequelize.STRING
    },
    A: {
      type: Sequelize.STRING
    },
    B: {
      type: Sequelize.STRING
    },
    C: {
      type: Sequelize.STRING
    },
    D: {
      type: Sequelize.STRING
    },
    right_answer: {
        type: Sequelize.STRING
    },
    paper_id: {
      type: Sequelize.INTEGER,
      references: {
        model: 'papers',
        key: 'paper_id',
     } 
    },
  },
  {
    timestamps: false
  }
)