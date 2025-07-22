import Tblpessoa from "../../models/pessoa/Tblpessoa";
import Tblemail from "../../models/pessoa/Tblemail";
import Tbspessoatipo from "../../models/pessoa/Tbspessoatipo";
import Tblpessoamidia from "../../models/pessoa/Tblpessoamidia";
import Tbstypemidia from "../../models/referencias/Tbstypemidia";

class TblpessoaController {


  // Método Index

  async index(req, res) {
    try {

      const consulta = 'SELECT `Tblpessoa`.`id`,`Tblpessoa`.`nomepessoa`,`Tblpessoa`.`tbspessoatipoid`,`Tblpessoa`.`cpfpessoa`,`Tblpessoa`.`cnpjpessoa`,`Tblpessoa`.`nascpessoa`,'+
      '`Tblemails`.`id` AS `Tblemails.id`,`Tblemails`.`email` AS `Tblemails.email`,`Tblemails`.`confirmed` AS `Tblemails.confirmed`,`Tbspessoatipo`.`id` AS `Tbspessoatipo.id`,'+
      '`Tbspessoatipo`.`tipopessoa` AS `Tbspessoatipo.tipopessoa`,`Tblpessoamidia`.`id` AS `Tblpessoamidia.id`,`Tblpessoamidia`.`tblpessoaid` AS `Tblpessoamidia.tblpessoaid`,'+
      '`Tblpessoamidia`.`tbstypemidiaid` AS `Tblpessoamidia.tbstypemidiaid`,`Tblpessoamidia->Tbstypemidia`.`id` AS `Tblpessoamidia.Tbstypemidia.id`,'+
      '`Tblpessoamidia->Tbstypemidia`.`namemidia` AS `Tblpessoamidia.Tbstypemidi.namemidia` FROM `Tblpessoas` AS `Tblpessoa`'+
      ' LEFT OUTER JOIN `Tblemails` AS `Tblemails` ON `Tblpessoa`.`id` = `Tblemails`.`TblpessoaId`'+
      ' LEFT OUTER JOIN `Tbspessoatipos` AS `Tbspessoatipo` ON `Tblpessoa`.`tbspessoatipoid` = `Tbspessoatipo`.`id`'+
      ' LEFT OUTER JOIN `Tblpessoamidias` AS `Tblpessoamidia` ON `Tblpessoa`.`id` = `Tblpessoamidia`.`tblpessoaid`'+
      ' LEFT OUTER JOIN `tbstypemidias` AS `Tblpessoamidia->Tbstypemidia` ON `Tblpessoamidia`.`tbstypemidiaid` = `Tblpessoamidia->Tbstypemidia`.`id`'+
      ' ORDER BY `Tblpessoa`.`id` ASC;';




      const pessoas = await Tblpessoa.sequelize.query(consulta, {
        type: Tblpessoa.sequelize.QueryTypes.SELECT,
        model: Tblpessoa,
        mapToModel: true, // pass true here if you have any mapped fields
        nest: true, // pass true if you want to get nested results
        include: [
          {
            model: Tblemail,
            attributes: ['id', 'email', 'confirmed'],
          },
          {
            model: Tbspessoatipo,
            attributes: ['id', 'tipopessoa'],
          },
          {
            model: Tblpessoamidia,
            attributes: ['id', 'tblpessoaid', 'tbstypemidiaid'],
            include: [{
              model: Tbstypemidia,
              attributes: ['id', 'namemidia']
            }]
          }
        ],
      });
/*      const pessoas = await Tblpessoa.findAll({
        attributes: ['id', 'nomepessoa','tbspessoatipoid', 'cpfpessoa', 'cnpjpessoa', 'nascpessoa'],
        order: [['id', 'ASC']],
        include: [
          {
            attributes: ['id', 'email', 'confirmed'],
            model: Tblemail,
          },
          {
            attributes: ['id', 'tipopessoa'],
            model: Tbspessoatipo,
          },
          {
            model: Tblpessoamidia,
            attributes: ['id', 'tblpessoaid', 'tbstypemidiaid'],
            include: [{
              model: Tbstypemidia,
              attributes: ['id', 'typemidia']
            }]
          },
//          {
//            attributes: ['id', 'tblpessoaid', 'usertypeid'],
//            model: 'User',
//          }
        ],
      });*/
      return res.json(pessoas);
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
      const Tblpessoa = await Tblpessoa.findByPk(req.TblpessoaId, {
        attributes: ['id', 'pessoaid', 'Tblpessoatypeid'],
        order: [['id', 'DESC'], [Tblpessoafoto, 'id', 'DESC']],
        include: [{
          model: Tblpessoafoto,
          attributes: ['url', 'id', 'filename']
        },
        {
          model: Tblpessoa,
          attributes: ['id', 'nomepessoa', 'cpfpessoa', 'cnpjpessoa', 'nascpessoa'],
          include: [{
            model: Tblemail,
            attributes: ['id', 'email', 'confirmed']
          }]
        },
        {
          model: Tblpessoatype,
          attributes: ['id', 'typeTblpessoa']
        }],
      });
      return res.json(Tblpessoa);
    } catch(e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }


  // Método Store

  async store(req, res) {
    try {
      const novoTblpessoa = await Tblpessoa.create(req.body);
      const { id, pessoaid, Tblpessoatypeid } = novoTblpessoa;
      return res.json({ id, name, lastname, alias, email, Tblpessoatypeid });
    } catch (e) {
      res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  // Método Update

  async update(req, res) {
    try {
      const Tblpessoa = await Tblpessoa.findByPk(req.TblpessoaId);

      if (!Tblpessoa) {
        return res.status(400).json({
          errors: ['BACK -  Usuário não existe.'],
        });
      }

      const novosDados = await Tblpessoa.update(req.body);
      const { id, pessoaid, Tblpessoatypeid } = novosDados;
      return res.json({ id, pessoaid, Tblpessoatypeid });
    } catch (e) {
      console.log(e);
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  // Método Delete

  async delete(req, res) {
    try {
      if (!req.params.id) {
        return res.status(400).json({
          errors: ['BACK -  Id do usuário não informada.'],
        });
      }

      const Tblpessoa = await Tblpessoa.findByPk(req.params.id);

      if (!Tblpessoa) {
        return res.status(400).json({
          errors: ['BACK -  Usuário não existe.'],
        });
      }

      await Tblpessoa.destroy();

      return res.json(null);

    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

*/
}

export default new TblpessoaController();
