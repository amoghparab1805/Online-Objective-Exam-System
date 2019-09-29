const Sequelize = require('sequelize')
const db = require('../database/db.js')

module.exports = db.sequelize.define(
  'professor',
  {
    prof_id: {
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
    department: {
      type: Sequelize.STRING
    },
    user_id: {
      type: Sequelize.INTEGER,
      references: {
        model: 'users',
        key: 'user_id',
     } 
    },
  },
  {
    timestamps: false
  }
)