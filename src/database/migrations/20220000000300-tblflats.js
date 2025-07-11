'use strict';

/** @type {import('sequelize-cli').Migration} */
// eslint-disable-next-line no-undef
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('tblflats', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      flatid: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'tbsflats',
          key: 'id',
        },
        onDelete: "SET NULL",
        onUpdate: "CASCADE",
      },
      pessoaid: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'tblpessoas',
          key: 'id',
        },
        onDelete: "SET NULL",
        onUpdate: "CASCADE",
      },
      flatquartos: {
        type: Sequelize.INTEGER(1),
        allowNull: false,
      },
      flathospedes: {
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
    await queryInterface.dropTable('tblflats');
  }
};
