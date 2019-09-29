const Sequelize = require('sequelize')
const db = require('../database/db.js')

module.exports = db.sequelize.define(
  'exam',
  {
    paper_id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    subject_id: {
      type: Sequelize.INTEGER,
      references: {
        model: 'subjects',
        key: 'subject_id',
     } 
    },
    prof_id: {
      type: Sequelize.INTEGER,
      references: {
        model: 'professors',
        key: 'prof_id',
     } 
    },
  },
  {
    timestamps: false
  }
)