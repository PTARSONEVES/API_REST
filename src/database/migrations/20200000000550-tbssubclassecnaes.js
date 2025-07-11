'use strict';

/** @type {import('sequelize-cli').Migration} */
// eslint-disable-next-line no-undef
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('tbssubclassecnaes', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      secaoid: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'tbssecaocnaes',
          key: 'id',
        },
        onDelete: "CASCADE",
      },
      divisaoid: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'tbsdivisaocnaes',
          key: 'id',
        },
        onDelete: "CASCADE",
      },
      grupoid: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'tbsgrupocnaes',
          key: 'id',
        },
        onDelete: "CASCADE",
      },
      classeid: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'tbsclassecnaes',
          key: 'id',
        },
        onDelete: "CASCADE",
      },
      codsubclasse: {
        type: Sequelize.STRING(7),
        allowNull: false,
      },
      descrsubclasse: {
        type: Sequelize.TEXT,
        allowNull:false,
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
    await queryInterface.dropTable('tbssubclassecnaes');
  }
};

