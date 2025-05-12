'use strict';


/** @type {import('sequelize-cli').Migration} */
// eslint-disable-next-line no-undef
module.exports = {
  async up (queryInterface/*, Sequelize*/) {
    for(let i = 1; i < 8; i++) {
      await queryInterface.bulkInsert(
        "usermidias", [
          {
            chave: i.toString()+'1',
            typemidiaid: i,
            userid: 1,
          },
      ]);
    }
    for(let i = 2; i < 12; i++) {
      const midias = Math.ceil(Math.random()*6);
      for(let j = 1; j < midias+1; j++) {
        await queryInterface.bulkInsert(
          "usermidias", [
            {
              typemidiaid: j,
              userid: i,
              chave: j.toString()+i.toString(),
            },
        ]);
      }
    }
  },

  async down (queryInterface/*, Sequelize*/) {
    await queryInterface.bulkDelete('usermidias', null, {});
  }
};
