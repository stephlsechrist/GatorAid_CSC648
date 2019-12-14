const {Sequelize, Model, DataTypes} = require('sequelize');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');

class User extends Model {
  static associate(models) {
    User.hasMany(models.Item);
  }

  static getHashedPassword(password) {
    return crypto.createHash('sha256').update(password).digest('base64');
  };

  createAPIToken() {
    return jwt.sign({
      id: this.id,
      email: this.email
    }, global.kraken.get('app:jwtSecret'));
  };

}

User.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false
  },
  username: {
    type: DataTypes.STRING,
    field: 'username'
  },
  password: {
    type: DataTypes.STRING,
    field: 'password'
  },
  isActive: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
    field: 'is_active'
  },
  isAdmin: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
    field: 'is_admin'
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
  defaultScope: {
    attributes: { exclude: ['password', 'createdAt', 'updatedAt', 'deletedAt', 'isActive', 'isAdmin'] },
  },
  modelName: 'user',
  paranoid: true,
  underscored: true,
  freezeTableName: true,
  sequelize: global.sequelize
});

module.exports = User;
