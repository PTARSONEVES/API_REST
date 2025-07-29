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
          usertypeid: 1,
          password_hash: bcryptjs.hashSync('detarso', 10),
        },
        {
          pessoaid: 2,
          usertypeid: 2,
          password_hash: bcryptjs.hashSync('detarso', 10),
        },
    ]);
    console.log("Createds Paulo and Sal");
    for(let i = 3; i < 13; i++){
      const tpuser = Math.ceil(Math.random()*10);
      if(tpuser === 0) {
        continue;
      } else {
        if(tpuser === 10) {tpuser=9;}
        for(let j = 1; j < tpuser + 1; j++) {
          // eslint-disable-next-line no-await-in-loop
          await queryInterface.bulkInsert(
            "users", [
              {
                pessoaid: i,
                usertypeid: j,
                password_hash: bcryptjs.hashSync('detarso', 10),
              },
          ]);
        }
      };
    }
  },

  async down (queryInterface/*, Sequelize*/) {
    await queryInterface.bulkDelete('users', null, {});
  }
};
