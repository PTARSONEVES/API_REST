'use strict';
// eslint-disable-next-line no-undef
const { fakerPT_BR: faker } = require("@faker-js/faker");

/** @type {import('sequelize-cli').Migration} */
// eslint-disable-next-line no-undef
module.exports = {
  async up (queryInterface/*, Sequelize*/) {
    await queryInterface.bulkInsert(
      "tblemails", [
        {
          tblpessoaid: 1,
          email: "ptarsoneves@gmail.com",
          confirmed: "1",
        },
        {
          tblpessoaid: 2,
          email: "salete.taraujo@gmail.com",
          confirmed: "1",
        },
    ]);
    for(let i = 0; i < 10; i++){
      await queryInterface.bulkInsert(
        "tblemails", [
          {
            tblpessoaid: i+2,
            email: faker.internet.email(),
            confirmed: "0",
          },
      ]);
    }
  },

  async down (queryInterface/*, Sequelize*/) {
    await queryInterface.bulkDelete('tblemails', null, {});
  }
};
