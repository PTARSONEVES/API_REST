'use strict';

/** @type {import('sequelize-cli').Migration} */
// eslint-disable-next-line no-undef
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('flatlocs', {
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
      flatid: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'flats',
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
      queryInterface.addIndex('flatlocs', ['reservaid', 'flatid'], {
        name: 'idx_flatlocs_reservaid_flatid',
        unique: true,
      });
    });

    await queryInterface.addIndex('flatlocs', ['flatid'], {
      name: 'idx_flatlocs_flatid',
      unique: false,
    });

    await queryInterface.addIndex('flatlocs', ['reservaid'], {
      name: 'idx_flatlocs_reservaid',
      unique: false,
    });

  },

  async down (queryInterface/*, Sequelize*/) {
    await queryInterface.dropTable('flatlocs');
  }
};
