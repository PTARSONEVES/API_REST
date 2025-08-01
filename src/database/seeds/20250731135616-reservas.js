'use strict';
// eslint-disable-next-line no-undef
const { fakerPT_BR: faker } = require("@faker-js/faker");

function convData(dta) {
  let dtconv = dta.toString();
  let ms = dtconv.slice(4,7);
  let ano = dtconv.slice(11,15);
  let dia = dtconv.slice(8,10);
  let mes='';
  if(ms === 'Jan'){mes='01'}
  if(ms === 'Feb'){mes='01'}
  if(ms === 'Mar'){mes='01'}
  if(ms === 'Apr'){mes='01'}
  if(ms === 'May'){mes='01'}
  if(ms === 'Jun'){mes='01'}
  if(ms === 'Jul'){mes='01'}
  if(ms === 'Ago'){mes='01'}
  if(ms === 'Sep'){mes='01'}
  if(ms === 'Oct'){mes='01'}
  if(ms === 'Nov'){mes='01'}
  if(ms === 'Dec'){mes='01'}
  dtconv = ano+'-'+mes+'-'+dia;
  return dtconv;
}
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    for(let i = 1; i < 13; i++){
      let dtin = faker.date.recent({days:40});
      let ckin = convData(dtin);
      let dtout = new Date();
      console.log("ckin= ",ckin);
      dtout.setDate(dtin.getDate()+5);
      let ckout = convData(dtout);
      console.log('ckout= ',ckout);
      const totflats = Math.ceil(Math.random()*4);
      const tothospedes = Math.ceil(Math.random()*4);
      const vlreserva = Math.ceil(Math.random()*4)*100;
      const vlpago = vlreserva*(Math.ceil(Math.random()*100))/100;
      console.log('Iniciando reservas');
      await queryInterface.bulkInsert(
        "reservas", [
          {
            id: i,
            pessoaid: i,
            checkin: ckin,
            checkout: ckout,
            numflats: totflats,
            numhospedes: tothospedes,
            vlrreserva: vlreserva,
            vlrpago: vlpago,
            sitreservaid: 1,
            observacao: 'outro'
          },
      ]);
      console.log('Reservas geradas. Grando agora Flatlocs');
      for(let j = 1; j < totflats +1; j++){
        await queryInterface.bulkInsert("flatlocs", [{
          reservaid: i,
          flatid: Math.ceil(Math.random()*189)
        }]);
      }
    }
  },

  async down (queryInterface/*, Sequelize*/) {
    await queryInterface.bulkDelete('flatlocs', null, {});
    await queryInterface.bulkDelete('reservas', null, {});
  }
};
