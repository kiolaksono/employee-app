'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class M_Family extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      M_Family.belongsTo(models.M_Employee,{
        foreignKey: 'employee_id',
      })
    }
  }
  M_Family.init({
    family_id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    hubungan_keluarga: {
      type: DataTypes.STRING(100),
    },
    nama_anggota_keluarga: {
      type: DataTypes.STRING(250),
    },
    tanggal_lahir_anggota_keluarga: {
      type: DataTypes.DATEONLY,
    },
  }, {
    sequelize,
    modelName: 'M_Family',
  });
  return M_Family;
};