'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('tbspaises', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      continenteid: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'tbscontinentes',
          key: 'id',
        },
        onDelete: "CASCADE",
      },
      paiscod: {
        type: Sequelize.STRING(4),
        allowNull: false,
      },
      paisname: {
        type: Sequelize.STRING(150),
        allowNull: false,
      },
      paispopname: {
        type: Sequelize.STRING(150),
        allowNull: false,
      },
      paisddi: {
        type: Sequelize.STRING(4),
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
    await queryInterface.dropTable('tbspaises');
  }
};
