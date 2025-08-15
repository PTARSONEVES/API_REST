import Continente from "../../models/localizacao/Continente";
import Pais from "../../models/localizacao/Pais";
import Regiao from "../../models/localizacao/Regiao";
import Uf from "../../models/localizacao/Uf";
import Municipio from "../../models/localizacao/Municipio";

class MunicipioController {

    // Método Index

    async index(req, res) {
      try {
        const flg = req.params;
        console.log('flt: ',flg);
        if(flg.id <= 0) {
          if(flg.ufid <= 0) {
            const municipios = await Municipio.findAll({
              attributes: ['id', 'ibgefull', 'ibgeshort', 'ufid','cityname','citylaw','datelaw','dateinstall','citynamesem','cityddd'],
              order: [['ufid', 'ASC'],['citynamesem', 'ASC']],
              include: [{
                model: Uf,
                attributes: ['id','regiaoid', 'coduf','uf','ufname','ufnamesem'],
                include: [{
                  model: Regiao,
                  attributes: ['id', 'paisid', 'regiaoname'],
                  include: [{
                    model: Pais,
                    attributes: ['id', 'continenteid','paiscod','paisname','paispopname','paispopsem','paisddi'],
                    include: [{
                      model: Continente,
                      attributes: ['id','namecontinente']
                    }]
                  }]
                }]
              }]
            });
            return res.json(municipios);
          } else {
            const municipios = await Municipio.findAll({
              where: {ufid: flg.ufid},
              attributes: ['id', 'ibgefull', 'ibgeshort', 'ufid','cityname','citylaw','datelaw','dateinstall','citynamesem','cityddd'],
              order: [['citynamesem', 'ASC']],
              include: [{
                model: Uf,
                attributes: ['id','regiaoid', 'coduf','uf','ufname','ufnamesem'],
                include: [{
                  model: Regiao,
                  attributes: ['id', 'paisid', 'regiaoname'],
                  include: [{
                    model: Pais,
                    attributes: ['id', 'continenteid','paiscod','paisname','paispopname','paispopsem','paisddi'],
                    include: [{
                      model: Continente,
                      attributes: ['id','namecontinente']
                    }]
                  }]
                }]
              }]
            });
            return res.json(municipios);
          }
        } else {
          const municipio = await Municipio.findAll({
            where: {id: flg.id},
            attributes: ['id', 'ibgefull', 'ibgeshort', 'ufid','cityname','citylaw','datelaw','dateinstall','citynamesem','cityddd'],
            order: [['citynamesem', 'ASC']],
            include: [{
              model: Uf,
              attributes: ['id','regiaoid', 'coduf','uf','ufname','ufnamesem'],
              include: [{
                model: Regiao,
                attributes: ['id', 'paisid', 'regiaoname'],
                include: [{
                  model: Pais,
                  attributes: ['id', 'continenteid','paiscod','paisname','paispopname','paispopsem','paisddi'],
                  include: [{
                    model: Continente,
                    attributes: ['id','namecontinente']
                  }]
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

export default new MunicipioController();
