const Sequelize = require('sequelize')
const db = require('../database/db.js')

module.exports = db.sequelize.define(
  'user',
  {
    user_id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    SAP_id: {
      type: Sequelize.INTEGER,
    },
    email_id: {
      type: Sequelize.STRING
    },
    first_name: {
      type: Sequelize.STRING
    },
    middle_name: {
      type: Sequelize.STRING
    },
    last_name: {
      type: Sequelize.STRING
    },
    password: {
      type: Sequelize.STRING
    },
    user_type_id: {
      type: Sequelize.INTEGER,
      references: {
        model: 'user_type',
        key: 'user_type_id',
     } 
    },
  },
  {
    timestamps: false
  }
)