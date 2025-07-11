'use strict';

/** @type {import('sequelize-cli').Migration} */
// eslint-disable-next-line no-undef
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('tblpessoas', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      nomepessoa: {
        type: Sequelize.STRING(200),
        allowNull: false,
      },
      pessoatipoid: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'tbspessoatipos',
          key: 'id',
        },
        onDelete: "SET NULL",
        onUpdate: "CASCADE",
      },
      cpfpessoa: {
        type: Sequelize.STRING(11),
        allowNull: false,
      },
      cnpjpessoa: {
        type: Sequelize.STRING(14),
        allowNull: false,
      },
      nascpessoa: {
        type: Sequelize.DATE,
        allowNull: true,
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
    await queryInterface.dropTable('tblpessoas');
  }
};
