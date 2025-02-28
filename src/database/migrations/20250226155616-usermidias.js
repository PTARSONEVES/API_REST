'use strict';

/** @type {import('sequelize-cli').Migration} */
// eslint-disable-next-line no-undef
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('usermidias', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      chave: {
        type: Sequelize.STRING(30),
        allowNull: true,
        unique: true,
      },
      typemidiaid: {
        type: Sequelize.INTEGER,
        allowNull: true,
/*
        references: {
          model: 'typemidias',
          key: 'id',
        },
        onDelete: "SET NULL",
        onUpdate: "CASCADE",
*/
      },
      userid: {
        type: Sequelize.INTEGER,
        allowNull: true,
/*
        references: {
          model: 'users',
          key: 'id',
        },
        onDelete: "SET NULL",
        onUpdate: "CASCADE",
*/
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
    await queryInterface.dropTable('usermidias');
  }
};
