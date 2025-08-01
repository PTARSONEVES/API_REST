'use strict';

/** @type {import('sequelize-cli').Migration} */
// eslint-disable-next-line no-undef
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('reservas', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      pessoaid: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'pessoas',
          key: 'id',
        },
        onDelete: "SET NULL",
        onUpdate: "CASCADE",
      },
      checkin: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      checkout: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      numflats: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      numhospedes: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      vlrreserva: {
        type: Sequelize.DECIMAL(20,2),
        allowNull: false,
      },
      vlrpago: {
        type: Sequelize.DECIMAL(20,2),
        allowNull: false,
        defaultValue: 0.00,
      },
      sitreservaid: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'sitreservas',
          key: 'id',
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      },
      observacao: {
        type: Sequelize.TEXT,
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
    await queryInterface.dropTable('reservas');
  }
};
