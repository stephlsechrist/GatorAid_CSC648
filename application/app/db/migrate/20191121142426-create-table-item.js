'use strict';

module.exports = {
  up: function (queryInterface, DataTypes) {
    return queryInterface.createTable('item', {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false
      },
      desc: {
        type: DataTypes.TEXT,
        field: 'desc'
      },
      picture: {
        type: DataTypes.STRING,
        field: 'picture'
      },
      isActive: {
        type: DataTypes.BOOLEAN,
        field: 'is_active',
        defaultValue: false
      },
      isAppropriate: {
        type: DataTypes.BOOLEAN,
        field: 'is_appropriate',
        defaultValue: true
      },
      price: {
        type: DataTypes.DOUBLE,
        field: 'price',
      },
      userId: {
        type: DataTypes.INTEGER,
        field: 'user_id',
        references: {
          model: 'user',
          field: 'id'
        },
        allowNull: false
      },
      categoryId: {
        type: DataTypes.INTEGER,
        field: 'category_id',
        references: {
          model: 'category',
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
    return queryInterface.dropTable('item');
  }
};
