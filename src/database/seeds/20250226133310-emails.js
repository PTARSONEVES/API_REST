'use strict';
// eslint-disable-next-line no-undef
const { fakerPT_BR: faker } = require("@faker-js/faker");

/** @type {import('sequelize-cli').Migration} */
// eslint-disable-next-line no-undef
module.exports = {
  async up (queryInterface/*, Sequelize*/) {
    await queryInterface.bulkInsert(
      "emails", [
        {
          email: "ptarsoneves@gmail.com",
          confirmed: "1",
          userId: 1,
        },
    ]);
    for(let i = 0; i < 10; i++){
      await queryInterface.bulkInsert(
        "emails", [
          {
            email: faker.internet.email(),
            confirmed: "0",
            userid: Math.ceil(Math.random()*7),
          },
      ]);
    }
  },

  async down (queryInterface/*, Sequelize*/) {
    await queryInterface.bulkDelete('emails', null, {});
  }
};
