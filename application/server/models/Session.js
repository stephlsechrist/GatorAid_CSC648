const Sequelize = require('sequelize')
const db = require('../config/database')

const Product = db.define('session', {
    sid: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true
      },
      sess: {
        type: Sequelize.JSON,
        allowNull: false
      },
      expire: {
        type: Sequelize.DATE,
        allowNull: false
    }
})

module.exports = Session