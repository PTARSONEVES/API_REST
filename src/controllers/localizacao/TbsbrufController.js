import Tbspais from "../../models/localizacao/Tbspais";
import Tbsbruf from "../../models/localizacao/Tbsbruf";
import Tbscontinente from "../../models/localizacao/Tbscontinente";

class TbsbrufController {

    // Método Index

    async index(req, res) {
      try {
        const ufs = await Tbsbruf.findAll({
          attributes: ['id', 'paisid', 'coduf', 'uf','ufname','ufnamesem'],
          order: [['ufnamesem', 'ASC']],
          include: [{
            model: Tbspais,
            attributes: ['id','continenteid', 'paiscod','paisname','paispopname','paispopsem','paisddi'],
            include: [{
              model: Tbscontinente,
              attributes: ['id', 'namecontinente']
            }]
          }]
        });
        return res.json(ufs);
      } catch(e) {
        return res.status(400).json({
          errors: e.errors.map((err) => err.message),
        });
      }
    }

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

}

export default new TbsbrufController();
