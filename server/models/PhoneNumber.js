const Sequelize = require('sequelize')
const db = require('../database/db.js')

const PhoneNumber = db.sequelize.define(
  'phone_number',
  {
    user_id: {
      type: Sequelize.INTEGER,
      references: {
        model: 'users',
        key: 'user_id',
     } 
    },
    phone_number: {
      type: Sequelize.STRING
    },
  },
  {
    timestamps: false
  }
);
PhoneNumber.removeAttribute('id');

module.exports = PhoneNumber