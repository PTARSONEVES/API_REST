'use strict';

/** @type {import('sequelize-cli').Migration} */
// eslint-disable-next-line no-undef
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('tbsflats', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      flatnome: {
        type: Sequelize.STRING(5),
        allowNull: false,
        unique: true,
      },
      flatbloco: {
        type: Sequelize.STRING(1),
        allowNull: false,
      },
      flatpiso: {
        type: Sequelize.STRING(1),
        allowNull: false,
      },
      tipoflatid: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'tbstipoflats',
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
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('tbsflats');
  }
};
