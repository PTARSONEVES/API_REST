'use strict';

// eslint-disable-next-line no-undef
const bcryptjs = require("bcryptjs");
// eslint-disable-next-line no-undef
const { fakerPT_BR: faker } = require("@faker-js/faker");

/** @type {import('sequelize-cli').Migration} */
// eslint-disable-next-line no-undef
module.exports = {
  async up (queryInterface/*, Sequelize*/) {
    await queryInterface.bulkInsert(
      "users", [
        {
          pessoaid: 1,
          usertypeid: 1,
          password_hash: bcryptjs.hashSync('detarso', 10),
        },
        {
          pessoaid: 2,
          usertypeid: 2,
          password_hash: bcryptjs.hashSync('detarso', 10),
        },
    ]);
    for(let i = 0; i < 10; i++){
      await queryInterface.bulkInsert(
        "users", [
          {
            pessoaid: (i+2),
            usertypeid: Math.ceil(Math.random()*7),
            password_hash: bcryptjs.hashSync('detarso',10),
          },
      ]);
    }
  },

  async down (queryInterface/*, Sequelize*/) {
    await queryInterface.bulkDelete('users', null, {});
  }
};
