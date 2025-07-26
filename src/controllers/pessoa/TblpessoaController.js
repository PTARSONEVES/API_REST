import Tblpessoa from "../../models/pessoa/Tblpessoa";
import Tblemail from "../../models/pessoa/Tblemail";
import Tbspessoatipo from "../../models/pessoa/Tbspessoatipo";
import Tblpessoamidia from "../../models/pessoa/Tblpessoamidia";
import Tbstypemidia from "../../models/referencias/Tbstypemidia";

class TblpessoaController {


  // Método Index

  async index(req, res) {
    try {
/*
// BelongsTo x BelongsTo
      const consulta = 'SELECT '+
      '`Tblpessoa`.`id`,`Tblpessoa`.`nomepessoa`,`Tblpessoa`.`tbspessoatipoid`,`Tblpessoa`.`cpfpessoa`,`Tblpessoa`.`cnpjpessoa`,`Tblpessoa`.`nascpessoa`,'+
      '`Tblemails`.`id` AS `Tblemails.id`,`Tblemails`.`email` AS `Tblemails.email`,`Tblemails`.`confirmed` AS `Tblemails.confirmed`,'+
      '`Tbspessoatipo`.`id` AS `Tbspessoatipo.id`,`Tbspessoatipo`.`tipopessoa` AS `Tbspessoatipo.tipopessoa`,'+
      '`Tblpessoamidia`.`id` AS `Tblpessoamidia.id`,`Tblpessoamidia`.`tblpessoaid` AS `Tblpessoamidia.tblpessoaid`,'+
      '`Tblpessoamidia`.`tbstypemidiaid` AS `Tblpessoamidia.tbstypemidiaid`,`Tblpessoamidia->Tbstypemidia`.`id` AS `Tblpessoamidia.Tbstypemidia.id`,'+
      '`Tblpessoamidia->Tbstypemidia`.`namemidia` AS `Tblpessoamidia.Tbstypemidi.namemidia` FROM `Tblpessoas` AS `Tblpessoa`'+
      ' LEFT OUTER JOIN `Tblemails` AS `Tblemails` ON `Tblpessoa`.`id` = `Tblemails`.`TblpessoaId`'+
      ' LEFT OUTER JOIN `Tbspessoatipos` AS `Tbspessoatipo` ON `Tblpessoa`.`tbspessoatipoid` = `Tbspessoatipo`.`id`'+
      ' LEFT OUTER JOIN `Tblpessoamidias` AS `Tblpessoamidia` ON `Tblpessoa`.`id` = `Tblpessoamidia`.`tblpessoaid`'+
      ' LEFT OUTER JOIN `tbstypemidias` AS `Tblpessoamidia->Tbstypemidia` ON `Tblpessoamidia`.`tbstypemidiaid` = `Tblpessoamidia->Tbstypemidia`.`id`'+
      ' ORDER BY `Tblpessoa`.`id` ASC;';
*/
/*
// hasMany x hasMany
      const consulta = 'SELECT '+
      '`Tblpessoa`.`id`,`Tblpessoa`.`nomepessoa`,`Tblpessoa`.`tbspessoatipoid`,`Tblpessoa`.`cpfpessoa`,`Tblpessoa`.`cnpjpessoa`,`Tblpessoa`.`nascpessoa`,'+
      '`Tblemails`.`id` AS `Tblemails.id`,`Tblemails`.`email` AS `Tblemails.email`,`Tblemails`.`confirmed` AS `Tblemails.confirmed`, '+
      '`Tbspessoatipo`.`id` AS `Tbspessoatipo.id`, `Tbspessoatipo`.`tipopessoa` AS `Tbspessoatipo.tipopessoa`,'+
      '`Tblpessoamidia`.`id` AS `Tblpessoamidia.id`, `Tblpessoamidia`.`tblpessoaid` AS `Tblpessoamidia.tblpessoaid`, `Tblpessoamidia`.`tbstypemidiaid` AS `Tblpessoamidia.tbstypemidiaid`, '+
      '`Tblpessoamidia->Tbstypemidia`.`id` AS `Tblpessoamidia.Tbstypemidia.id`,'+
      '`Tblpessoamidia->Tbstypemidia`.`namemidia` AS `Tblpessoamidia.Tbstypemidia.namemidia` '+
      'FROM `Tblpessoas` AS `Tblpessoa` '+
      'LEFT OUTER JOIN `tblemails` AS `Tblemails` ON `Tblpessoa`.`id` = `Tblemails`.`TblpessoaId` '+
      'LEFT OUTER JOIN `tbspessoatipos` AS `Tbspessoatipo` ON `Tblpessoa`.`tbspessoatipoid` = `Tbspessoatipo`.`id` '+
      'LEFT OUTER JOIN `tblpessoamidias` AS `Tblpessoamidia` ON `Tblpessoa`.`id` = `Tblpessoamidia`.`tblpessoaid` '+
      'LEFT OUTER JOIN `tbstypemidias` AS `Tblpessoamidia->Tbstypemidia` ON `Tblpessoamidia`.`tbstypemidiaid` = `Tblpessoamidia->Tbstypemidia`.`id` '+
      'ORDER BY `Tblpessoa`.`id` ASC';
*/
/*
      const consulta = 'SELECT '+
      '`Tblpessoa`.`id`, `Tblpessoa`.`nomepessoa`, `Tblpessoa`.`tbspessoatipoid`, `Tblpessoa`.`cpfpessoa`, `Tblpessoa`.`cnpjpessoa`, `Tblpessoa`.`nascpessoa`, '+
      '`Tblemails`.`id` AS `Tblemails.id`, `Tblemails`.`email` AS `Tblemails.email`, `Tblemails`.`confirmed` AS `Tblemails.confirmed`, '+
      '`Tbspessoatipo`.`id` AS `Tbspessoatipo.id`, `Tbspessoatipo`.`tipopessoa` AS `Tbspessoatipo.tipopessoa` '+
      'FROM `Tblpessoas` AS `Tblpessoa` '+
      'LEFT OUTER JOIN `Tblemails` AS `Tblemails` ON `Tblpessoa`.`id` = `Tblemails`.`TblpessoaId` '+
      'LEFT OUTER JOIN `Tbspessoatipos` AS `Tbspessoatipo` ON `Tblpessoa`.`tbspessoatipoid` = `Tbspessoatipo`.`id` '+
      'ORDER BY `Tblpessoa`.`id` ASC';
*/
/*
      const consulta = 'SELECT  '+
        '`pessoa`.`id`,`pessoa`.`nomepessoa`,`pessoa`.`tbspessoatipoid`,`pessoa`.`cpfpessoa`,`pessoa`.`cnpjpessoa`,`pessoa`.`nascpessoa`,'+
        '`pessoa.tipo`.`id` AS `pessoa.tipo.id`,`pessoa.tipo`.tipopessoa AS `pessoa.tipo.tipopessoa`,'+
        '`pessoa.emails`.`id` AS `pessoa.emails.id`,`pessoa.emails`.`tblpessoaid` AS `pessoa.emails.tblpessoaid`,`pessoa.emails`.`email` AS `pessoa.emails.email`,`pessoa.emails`.`confirmed` AS `pessoa.emails.confirmed`,'+
        '`pessoa.midias`.`id` AS `pessoa.midias.id`,`pessoa.midias`.`tblpessoaid` AS `pessoa.midias.tblpessoaid`,`pessoa.midias`.`tbstypemidiaid` AS `pessoa.midias.tbstypemidiaid`,'+
        '`pessoa.midias.tipomidia`.`id` AS `pessoa.midias.tipomidia.id`,`pessoa.midias.tipomidia`.`namemidia` AS `pessoa.midias.tipomidia.namemidia` '+
        'FROM tblpessoas AS pessoa '+
        'LEFT OUTER JOIN tbspessoatipos AS `pessoa.tipo` ON `pessoa.tipo`.`id`=pessoa.tbspessoatipoid '+
        'LEFT OUTER JOIN tblemails AS `pessoa.emails` ON pessoa.id=`pessoa.emails`.tblpessoaid '+
        'LEFT OUTER JOIN tblpessoamidias AS `pessoa.midias` ON `pessoa`.id=`pessoa.midias`.tblpessoaid '+
        'LEFT OUTER JOIN tbstypemidias AS `pessoa.midias.tipomidia` ON `pessoa.midias.tipomidia`.id=`pessoa.midias`.`tbstypemidiaid`';
      const pessoas = await Tblpessoa.sequelize.query(consulta, {
        nest: true,
        raw: true,
        type: Tblpessoa.sequelize.QueryTypes.SELECT,
        logging: console.log,
        model: Tblpessoa,
        as: pessoa,
        mapToModel: true,
        include: [
          {
            model: Tblemail,
            as: 'emails',
            attributes: ['id', 'email', 'confirmed'],
          },
          {
            model: Tbspessoatipo,
            as: 'tipo',
            attributes: ['id', 'tipopessoa'],
          },
          {
            model: Tblpessoamidia,
            as: 'midia',
            attributes: ['id', 'tbstypemidiaid'],
            include: [{
              model: Tbstypemidia,
              as: 'tipomidia',
              attributes: ['id', 'namemidia']
            }]
          }
        ],
      });
*/

      const pessoas = await Tblpessoa.findAll({
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
//        {
//            model: Tblpessoamidia,
//           attributes: ['id', 'tblpessoaid', 'tbstypemidiaid'],
//            include: [{
//              model: Tbstypemidia,
//              attributes: ['id', 'typemidia']
//            }]
//          },
//          {
//            attributes: ['id', 'tblpessoaid', 'usertypeid'],
//            model: 'User',
//          }
        ],
      });

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
