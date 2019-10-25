const Sequelize = require('sequelize')
const db = require('../config/database')

const Product = db.define('products', {
    product_id: {
        type: Sequelize.UUID,
        primaryKey: true,
        defaultValue: Sequelize.literal('uuid_generate_v4()'),
        allowNull: false
    },
    user_id: {
        type: Sequelize.UUID,
        foreignKey: true,
        allowNull: false
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    description: {
        type: Sequelize.TEXT,
        allowNull: false,
    },
    price: {
        type: Sequelize.DOUBLE,
        allowNull: false
    },
    category: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    confirmation: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
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

module.exports = Product