'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class M_Employee extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      M_Employee.belongsTo(models.M_User, {
        foreignKey:'create_by'
      })
      M_Employee.hasMany(models.M_Family,{
        foreignKey: 'employee_id',
        onDelete: 'CASCADE',
      })
    }
  }
  M_Employee.init({
    m_employee_id: {
      type: DataTypes.INTEGER,
      primaryKey: true, // Menentukan kolom ini sebagai primary key
      autoIncrement: true,
      field: 'm_employee_id', // Nama kolom di database
    },
    nama_karyawan: {
      type: DataTypes.STRING(250),
    },
    tanggal_lahir: {
      type: DataTypes.DATEONLY,
    },
    alamat: {
      type: DataTypes.TEXT,
    },
    email: {
      type: DataTypes.STRING(100),
    },
    valid_from: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      validate:{
        notNull:{
          msg:"valid from is required"
        },
        notEmpty:{
          msg:"valid from is required"
        },
      },
    },
    valid_to: {
      type: DataTypes.DATEONLY,
    },
    create_by: {
      type: DataTypes.BIGINT,
      allowNull: false,
      validate:{
        notNull:{
          msg:"create by is required"
        },
        notEmpty:{
          msg:"create by is required"
        },
      },
    },
    create_date: {
      type: DataTypes.DATE,
      allowNull: false,
      validate:{
        notNull:{
          msg:"create date is required"
        },
        notEmpty:{
          msg:"create date is required"
        },
      },
      defaultValue: DataTypes.NOW,
    },
    update_by: {
      type: DataTypes.BIGINT,
    },
    update_date: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    }
  }, {
    sequelize,
    modelName: 'M_Employee',
  });

  M_Employee.beforeCreate(employee=>{
    employee.valid_to = "2025-12-31"
    employee.update_by = employee.create_by
    
  })


  return M_Employee;
};