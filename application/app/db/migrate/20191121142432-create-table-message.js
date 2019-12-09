'use strict';

module.exports = {
  up: function (queryInterface, DataTypes) {
    return queryInterface.createTable('message', {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false
      },
      message: {
        type: DataTypes.STRING,
      },
      status: {
        type: DataTypes.STRING,
      },
      senderId: {
        type: DataTypes.INTEGER,
        field: 'sender_id',
        references: {
          model: 'user',
          field: 'id'
        },
        allowNull: false
      },
      receiverId: {
        type: DataTypes.INTEGER,
        field: 'receiver_id',
        references: {
          model: 'user',
          field: 'id'
        },
        allowNull: false
      },
      item_id: {
        type: DataTypes.INTEGER,
        field: 'item_id',
        references: {
          model: 'item',
          field: 'id'
        },
        allowNull: false
      },

      createdAt: {
        type: DataTypes.DATE,
        field: 'created_at'
      },
      updatedAt: {
        type: DataTypes.DATE,
        field: 'updated_at'
      },
      deletedAt: {
        type: DataTypes.DATE,
        field: 'deleted_at'
      }
    });

  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.dropTable('message');
  }
};
