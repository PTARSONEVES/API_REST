'use strict';

/** @type {import('sequelize-cli').Migration} */
// eslint-disable-next-line no-undef
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('midias', {
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
      midiatpoid: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'midiatpos',
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
      queryInterface.addIndex('midias', ['pessoaid', 'midiatpoid'], {
        name: 'idx_midias_pessoaid_midiatpoid',
        unique: true,
      });
    });
    await queryInterface.addIndex('midias', ['pessoaid'], {
      name: 'idx_midias_pessoaid',
      unique: false,
    });
    await queryInterface.addIndex('midias', ['midiatpoid'], {
      name: 'idx_midias_midiatpoid',
      unique: false,
    });
  },

  async down (queryInterface/*, Sequelize*/) {
    await queryInterface.dropTable('midias');
  }
};
