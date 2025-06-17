'use strict';

/** @type {import('sequelize-cli').Migration} */
// eslint-disable-next-line no-undef
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('tbsisssubitems', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      itemid: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'tbsissitems',
          key: 'id',
        },
        onDelete: "CASCADE",
      },
      codsubitem: {
        type: Sequelize.STRING(2),
        allowNull: false,
      },
      descrsubitem: {
        type: Sequelize.TEXT,
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
    await queryInterface.dropTable('tbsisssubitems');
  }
};
