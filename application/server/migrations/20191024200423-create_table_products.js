'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp";')
      .then(() => {
        return queryInterface.createTable(
          'products', {
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
          }
        )
      })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('products')
  }
};
