'use strict';

/** @type {import('sequelize-cli').Migration} */
// eslint-disable-next-line no-undef
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('hospedes', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      reservaid: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'reservas',
          key: 'id',
        },
        onDelete: "SET NULL",
        onUpdate: "CASCADE",
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
    })
    .then(() => {
      return queryInterface.addIndex('hospedes', ['reservaid', 'pessoaid'], {
        unique: true,
        name: 'unique_hospedes_reserva_pessoa'
      });
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('hospedes');
  }
};
