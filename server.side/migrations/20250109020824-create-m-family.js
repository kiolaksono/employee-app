'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('M_Families', {
      family_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      employee_id:{
        type: Sequelize.INTEGER,
        allowNull:false,
        references:{
          model:"M_Employees",
          key:"m_employee_id"
        },
      },
      hubungan_keluarga: {
        type: Sequelize.STRING(100),
      },
      nama_anggota_keluarga: {
        type: Sequelize.STRING(250),
      },
      tanggal_lahir_anggota_keluarga: {
        type: Sequelize.DATEONLY,
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
    await queryInterface.dropTable('M_Families');
  }
};