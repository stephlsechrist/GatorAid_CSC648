const Sequelize = require('sequelize')
const db = require('../config/database')

const Product = db.define('messages', {
    message_id: {
        type: Sequelize.UUID,
        foreignKey: true,
        allowNull: false
      },
      sending_user_id: {
        type: Sequelize.UUID,
        foreignKey: true,
        allowNull: false
      },
      receiving_user_id: {
        type: Sequelize.UUID,
        foreignKey: true,
        allowNull: false
    }
})

module.exports = Message