'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp";')
    .then(() => {
      return queryInterface.createTable(
        'messages',
        {
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
          },
        }
      )
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('messages')
  }
};