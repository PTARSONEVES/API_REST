'use strict';

/** @type {import('sequelize-cli').Migration} */
// eslint-disable-next-line no-undef
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('tbsbrufs', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      paisid: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'tbspaises',
          key: 'id',
        },
        onDelete: "CASCADE",
      },
      coduf: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      uf: {
        type: Sequelize.STRING(2),
        allowNull: false,
      },
      ufname: {
        type: Sequelize.STRING(40),
        allowNull: false,
      },
      ufnamesem: {
        type: Sequelize.STRING(40),
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

  async down (queryInterface/*, Sequelize*/) {
    await queryInterface.dropTable('tbsbrufs');
  }
};
