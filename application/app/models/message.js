const { Sequelize, Model, DataTypes } = require('sequelize');

class Messaage extends Model {

  static associate(models) {
    Messaage.belongsTo(models.User,  { foreignKey: 'sender_id', as: 'sender' });
    Messaage.belongsTo(models.User,  { foreignKey: 'receiver_id', as: 'receiver' });
    Messaage.belongsTo(models.Item);
  }

}

Messaage.init({
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
  itemId: {
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
}, {
  modelName: 'message',
  paranoid: true,
  underscored: true,
  freezeTableName: true,
  sequelize: global.sequelize
});

module.exports = Messaage;
