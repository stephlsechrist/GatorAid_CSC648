const Sequelize = require('sequelize')
const db = require('../config/database')

const Product_Photo = db.define('product_photos', {
    product_id: {
        type: Sequelize.UUID,
        foreignKey: true,
        allowNull: false
      },
    photo_url: {
        type: Sequelize.STRING,
        allowNull: false
    },
    createdAt: {
        allowNull: false,
        type: Sequelize.DATE
    },
    updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
    }
})

module.exports = Product_Photo