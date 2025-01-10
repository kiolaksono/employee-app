'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('M_Employees', {
      m_employee_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      },
      nama_karyawan: {
        type: Sequelize.STRING(250),
      },
      tanggal_lahir: {
        type: Sequelize.DATEONLY,
      },
      alamat: {
        type: Sequelize.TEXT,
      },
      email: {
        type: Sequelize.STRING(100),
      },

      valid_from: {
        type: Sequelize.DATEONLY,
        allowNull: false,
      },
      valid_to: {
        type: Sequelize.DATEONLY,
      },
      create_by: {
        type: Sequelize.BIGINT,
        allowNull: false,
        references:{
          model:"M_Users",
          key:"id"
        },
      },
      create_date: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      update_by: {
        type: Sequelize.BIGINT,
      },
      update_date: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('M_Employees');
  }
};