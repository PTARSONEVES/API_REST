'use strict';
// eslint-disable-next-line no-undef
const { fakerPT_BR: faker } = require("@faker-js/faker");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "tblpessoas", [
        {
          nomepessoa: "Paulo de Tarso Neves de Araújo",
          pessoatipoid: 1,
          cpfpessoa: "19849290463",
          cnpjpessoa: null,
          nascpessoa: new Date("1959-08-26"),
        },
        {
          nomepessoa: "Salete Torres de Araújo",
          pessoatipoid: 1,
          cpfpessoa: "76544117404",
          cnpjpessoa: null,
          nascpessoa: new Date("1970-11-26"),
        },
    ]);
    for(let i = 0; i < 10; i++){
      await queryInterface.bulkInsert(
        "tblpessoas", [
          {
            nomepessoa: faker.person.fullName(),
            pessoatipoid: 1,
            cpfpessoa: faker.string.numeric(11),
            cnpjpessoa: null,
            nascpessoa: faker.date.birthdate(),
          },
      ]);
    }
  },

  async down (queryInterface/*, Sequelize*/) {
    await queryInterface.bulkDelete('tblpessoas', null, {});
  }
};
