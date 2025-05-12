'use strict';

// eslint-disable-next-line no-undef
const { fakerPT_BR: faker } = require("@faker-js/faker");

/** @type {import('sequelize-cli').Migration} */
// eslint-disable-next-line no-undef
module.exports = {
  async up (queryInterface/*, Sequelize*/) {
    for(let i = 0; i < 30; i++){
      await queryInterface.bulkInsert(
        "tbspaises", [
          {
            continenteid: Math.ceil(Math.random()*8),
            paiscod: faker.location.countryCode(),
            paisname: faker.location.country(),
            paispopname: faker.location.country(),
            paisddi: faker.string.numeric( { min: 1, max: 999 }),
          },
      ]);
    }
  },

  async down (queryInterface/*, Sequelize*/) {
    await queryInterface.bulkDelete('tbspaises', null, {});
  }
};
