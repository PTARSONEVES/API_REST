'use strict';

/** @type {import('sequelize-cli').Migration} */
// eslint-disable-next-line no-undef
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('regioes', {
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
          model: 'paises',
          key: 'id',
        },
        onDelete: "CASCADE",
      },
      regiaoname: {
        type: Sequelize.STRING(150),
        allowNull: false,
      },
      regiaonamesem: {
        type: Sequelize.STRING(150),
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
    await queryInterface.dropTable('regioes');
  }
};
