'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "usertypes",
      [
        {typeuser: "Master",},
        {typeuser: "Proprietário",},
        {typeuser: "Cliente",},
        {typeuser: "Visitante",},
        {typeuser: "Colaborador",},
        {typeuser: "Fornecedor",},
        {typeuser: "Prestador",},
      ],
    );
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete("usertypes", null, {});
  },
};
