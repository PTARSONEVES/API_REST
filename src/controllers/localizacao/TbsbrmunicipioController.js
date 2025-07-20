import Tbsbrmunicipio from "../../models/localizacao/Tbsbrmunicipio";
import Tbspais from "../../models/localizacao/Tbspais";
import Tbsbruf from "../../models/localizacao/Tbsbruf";
import Tbscontinente from "../../models/localizacao/Tbscontinente";

class TbsbrmunicipioController {

    // Método Index

    async index(req, res) {
      try {
        const flg = req.params;
        console.log('flt: ',flg);
        if(flg.id <= 0) {
          if(flg.ufid <= 0) {
            const municipios = await Tbsbrmunicipio.findAll({
              attributes: ['id', 'ibgefull', 'ibgeshort', 'ufid','cityname','citylaw','datelaw','dateinstall','citynamesem','cityddd'],
              order: [['ufid', 'ASC'],['citynamesem', 'ASC']],
              include: [{
                model: Tbsbruf,
                attributes: ['id','paisid', 'coduf','uf','ufname','ufnamesem'],
                include: [{
                  model: Tbspais,
                  attributes: ['id', 'continenteid','paiscod','paisname','paispopname','paispopsem','paisddi'],
                  include: [{
                    model: Tbscontinente,
                    attributes: ['id','namecontinente']
                  }]
                }]
              }]
            });
            return res.json(municipios);
          } else {
            const municipios = await Tbsbrmunicipio.findAll({
              where: {ufid: flg.ufid},
              attributes: ['id', 'ibgefull', 'ibgeshort', 'ufid','cityname','citylaw','datelaw','dateinstall','citynamesem','cityddd'],
              order: [['citynamesem', 'ASC']],
              include: [{
                model: Tbsbruf,
                attributes: ['id','paisid', 'coduf','uf','ufname','ufnamesem'],
                include: [{
                  model: Tbspais,
                  attributes: ['id', 'continenteid','paiscod','paisname','paispopname','paispopsem','paisddi'],
                  include: [{
                    model: Tbscontinente,
                    attributes: ['id','namecontinente']
                  }]
                }]
              }]
            });
            return res.json(municipios);
          }
        } else {
          const municipio = await Tbsbrmunicipio.findAll({
            where: {id: flg.id},
            attributes: ['id', 'ibgefull', 'ibgeshort', 'ufid','cityname','citylaw','datelaw','dateinstall','citynamesem','cityddd'],
            order: [['citynamesem', 'ASC']],
            include: [{
              model: Tbsbruf,
              attributes: ['id','paisid', 'coduf','uf','ufname','ufnamesem'],
              include: [{
                model: Tbspais,
                attributes: ['id', 'continenteid','paiscod','paisname','paispopname','paispopsem','paisddi'],
                include: [{
                  model: Tbscontinente,
                  attributes: ['id','namecontinente']
                }]
              }]
            }]
          });
          return res.json(municipio);
        }
      } catch(e) {
        return res.status(400).json({
          errors: e.errors.map((err) => err.message),
        });
      }
    }

    // Método Show
}

export default new TbsbrmunicipioController();
