'use strict';

/** @type {import('sequelize-cli').Migration} */
// eslint-disable-next-line no-undef
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('tbsbrmunicipios', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      ibgefull: {
        type: Sequelize.STRING(7),
        allowNull: false,
      },
      ibgeshort: {
        type: Sequelize.STRING(5),
        allowNull: false,
      },
      ufid: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'tbsbrufs',
          key: 'id',
        },
        onDelete: "CASCADE",
      },
      cityname: {
        type: Sequelize.STRING(80),
        allowNull: false,
      },
      citylaw: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      datelaw: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      dateinstall: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      citynamesem: {
        type: Sequelize.STRING(80),
        allowNull: false,
      },
      cityddd: {
        type: Sequelize.STRING(2),
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
    await queryInterface.dropTable('tbsbrmunicipios');
  }
};
