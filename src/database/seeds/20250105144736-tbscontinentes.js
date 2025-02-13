'use strict';

/** @type {import('sequelize-cli').Migration} */
// eslint-disable-next-line no-undef
module.exports = {
  async up (queryInterface/*, Sequelize*/) {
    await queryInterface.bulkInsert(
      "tbscontinentes",
      [
        {namecontinente: "Oceania",},
        {namecontinente: "América do Sul",},
        {namecontinente: "América Central",},
        {namecontinente: "América do Norte",},
        {namecontinente: "Africa",},
        {namecontinente: "Ásia",},
        {namecontinente: "Europa",},
        {namecontinente: "Outros",},
      ],
    );
  },

  async down (queryInterface/*, Sequelize*/) {
    await queryInterface.bulkDelete("tbscontinentes", null, {});
  },
};
