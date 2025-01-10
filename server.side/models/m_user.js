'use strict';
const {
  Model
} = require('sequelize');
const { hashPass } = require('../helpers/hash');
module.exports = (sequelize, DataTypes) => {
  class M_User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      M_User.hasMany(models.M_Employee, {
        foreignKey: "m_employee_id"
      })
    }
  }
  M_User.init({
    username: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'M_User',
  });

  M_User.beforeCreate(user=>{
    user.password = hashPass(user.password)
  })
  return M_User;
};