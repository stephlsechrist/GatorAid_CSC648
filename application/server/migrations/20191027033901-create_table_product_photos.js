'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp";')
      .then(() => {
        return queryInterface.createTable(
          'product_photos', {
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
              allowNull: true,
              type: Sequelize.DATE
            },
            updatedAt: {
              allowNull: true,
              type: Sequelize.DATE
            }
          }
        )
      })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('product_photos')
  }
};
