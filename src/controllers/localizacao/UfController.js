import Continente from "../../models/localizacao/Continente";
import Pais from "../../models/localizacao/Pais";
import Regiao from '../../models/localizacao/Regiao';
import Uf from "../../models/localizacao/Uf";
import { Op } from 'sequelize';

class UfController {

    // Método Index

    async index(req, res) {
      const flg = req.params;
      try {
        if (flg.id <= 0) {
          if (flg.paisid <= 0) {
            const ufs = await Uf.findAll({
              attributes: ['id', 'paisid', 'regiaoid', 'coduf', 'uf','ufname','ufnamesem'],
              order: [['ufnamesem', 'ASC']],
              include: [
                {
                  model: Pais,
                  attributes: ['id','continenteid', 'paiscod','paisname','paispopname','paispopsem','paisddi'],
                  include: [{
                    model: Continente,
                    attributes: ['id', 'namecontinente']
                  }],
                },
                {
                  model: Regiao,
                  attributes: ['id', 'paisid', 'regiaoname'],
                  include: [{
                    model: Pais,
                    attributes: ['id','continenteid', 'paiscod','paisname','paispopname','paispopsem','paisddi'],
                    include: [{
                      model: Continente,
                      attributes: ['id', 'namecontinente']
                    }]
                  }]
                }
              ]
            });
            return res.json(ufs);
          }
          // If paisid is provided, filter by paisid
          const ufs = await Uf.findAll({
            where: { paisid: flg.paisid },
            attributes: ['id', 'paisid', 'regiaoid', 'coduf', 'uf','ufname','ufnamesem'],
            order: [['ufnamesem', 'ASC']],
            include: [
              {
                model: Pais,
                attributes: ['id','continenteid', 'paiscod','paisname','paispopname','paispopsem','paisddi'],
                include: [{
                  model: Continente,
                  attributes: ['id', 'namecontinente']
                }],
              },
              {
                model: Regiao,
                attributes: ['id', 'paisid', 'regiaoname'],
                include: [{
                  model: Pais,
                  attributes: ['id','continenteid', 'paiscod','paisname','paispopname','paispopsem','paisddi'],
                  include: [{
                    model: Continente,
                    attributes: ['id', 'namecontinente']
                  }]
                }]
              }
            ]
          });
          return res.json(ufs);
        } else if (flg.id && flg.id > 0) {
          const uf = await Uf.findByPk(flg.id, {
            attributes: ['id', 'paisid', 'regiaoid', 'coduf', 'uf','ufname','ufnamesem'],
            include: [
              {
                model: Pais,
                attributes: ['id','continenteid', 'paiscod','paisname','paispopname','paispopsem','paisddi'],
                include: [{
                  model: Continente,
                  attributes: ['id', 'namecontinente']
                }],
              },
              {
                model: Regiao,
                attributes: ['id', 'paisid', 'regiaoname'],
                include: [{
                  model: Pais,
                  attributes: ['id','continenteid', 'paiscod','paisname','paispopname','paispopsem','paisddi'],
                  include: [{
                    model: Continente,
                    attributes: ['id', 'namecontinente']
                  }]
                }]
              }
            ]
          });
          return res.json(uf);
        }
      } catch(e) {
        return res.status(400).json({
          errors: e.errors.map((err) => err.message),
        });
      }
    }

/*
    // Método Show

    async show(req, res) {
      try {
        const uf = await Tbsbruf.findByPk(req.params.ufId, {
          attributes: ['id', 'paisid', 'coduf', 'uf','ufname','ufnamesem'],
          include: [{
            model: Tbspais,
            attributes: ['id','continenteid', 'paiscod','paisname','paispopname','paispopsem','paisddi'],
            include: [{
              model: Tbscontinente,
              attributes: ['id', 'namecontinente']
            }]
          }]
        });
        return res.json(uf);
      } catch(e) {
        return res.status(400).json({
          errors: e.errors.map((err) => err.message),
        });
      }
    }
*/
}

export default new UfController();
