'use strict';


/** @type {import('sequelize-cli').Migration} */
// eslint-disable-next-line no-undef
module.exports = {
  async up (queryInterface/*, Sequelize*/) {
    for(let i = 1; i < 7; i++) {
      await queryInterface.bulkInsert(
        "tblpessoamidias", [
          {
            tblpessoaid: 1,
            tbstypemidiaid: i,
          },
          {
            tblpessoaid: 2,
            tbstypemidiaid: i,
          },
      ]);
    }
    for(let i = 3; i < 13; i++) {
      const midias = Math.ceil(Math.random()*6);
      if(midias === 0) {
        continue;
      } else {
        if(midias === 7) {midias=6;}
        for(let j = 1; j < midias + 1; j++) {
          // eslint-disable-next-line no-await-in-loop
          await queryInterface.bulkInsert(
            "tblpessoamidias", [
              {
                tblpessoaid: i,
                tbstypemidiaid: j,
              },
          ]);
        }
      }
    }
  },

  async down (queryInterface/*, Sequelize*/) {
    await queryInterface.bulkDelete('tblpessoamidias', null, {});
  }
};
