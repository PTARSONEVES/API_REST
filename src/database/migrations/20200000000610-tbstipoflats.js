'use strict';

/** @type {import('sequelize-cli').Migration} */
// eslint-disable-next-line no-undef
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('tbstipoflats', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      areaflat: {
        type: Sequelize.FLOAT(10,4),
        allowNull: false,
        unique: true,
      },
      quartosflat: {
        type: Sequelize.INTEGER(2),
        allowNull: false,
      },
      salasflat: {
        type: Sequelize.INTEGER(2),
        allowNull: false,
      },
      varandasflat: {
        type: Sequelize.INTEGER(2),
        allowNull: false,
      },
      wcsflat: {
        type: Sequelize.INTEGER(2),
        allowNull: false,
      },
      cozinhasflat: {
        type: Sequelize.INTEGER(2),
        allowNull: false,
      },
      garagensflat: {
        type: Sequelize.INTEGER(2),
        allowNull: false,
      },
      created_at: {
        allowNull: false,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
        type: 'TIMESTAMP',
      },
      updated_at: {
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"),
        allowNull: false,
        type: "TIMESTAMP",
      },
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('tbstipoflatss');
  }
};
