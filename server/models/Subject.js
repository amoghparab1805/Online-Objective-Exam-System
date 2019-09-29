const Sequelize = require('sequelize')
const db = require('../database/db.js')

module.exports = db.sequelize.define(
  'subject',
  {
    subject_id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    subject_name: {
      type: Sequelize.STRING 
    },
  },
  {
    timestamps: false
  }
)