'use strict';

const bcryptjs = require("bcryptjs");
const { fakerPT_BR: faker } = require("@faker-js/faker");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "users", [
        {
          name: "Paulo",
          lastname: "Araujo",
          alias: "ptarsoneves",
          email: "ptarsoneves@gmail.com",
          password_hash: bcryptjs.hashSync('detarso', 10),
          usertypeid: 1,
        },
    ]);
    for(let i = 0; i < 10; i++){
      await queryInterface.bulkInsert(
        "users", [
          {
            name: faker.person.firstName(),
            lastname: faker.person.lastName(),
            alias: faker.internet.username(),
            email: faker.internet.email(),
            password_hash: bcryptjs.hashSync('detarso',10),
            usertypeid: Math.ceil(Math.random()*7),
          },
      ]);
    }
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {});
  }
};
