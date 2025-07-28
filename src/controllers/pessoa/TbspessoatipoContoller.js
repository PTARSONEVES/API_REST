import Tbspessoatipo from "../../models/pessoa/Tbspessoatipo";
import Tblpessoa from "../../models/pessoa/Tblpessoa";
import Tblemail from "../../models/pessoa/Tblemail";
import Tblpessoamidia from "../../models/pessoa/Tblpessoamidia";
import Tbstypemidia from "../../models/referencias/Tbstypemidia";
import { consulta } from "../../database/repository/pessoas/tbspeessoatipo";
import { Association } from "sequelize";

class TbspessoatipoController {

  // Método Index

  async index(req, res) {
    try {
      const tipos = await Tbspessoatipo.findAll({
//      const tipos = await Tbspessoatipo.sequelize.query(consulta(),{
//        nest: true,
//        raw: true,
//        mapToModel: true,
//        model: Tbspessoatipo,
//        type: Tbspessoatipo.sequelize.QueryTypes.SELECT,
        attributes: ['id', 'tipopessoa'],
        order: [['id', 'ASC']],
        include: [{
          model: Tblpessoa,
          as: 'Tblpessoas',
          attributes: ['id','nomepessoa', 'tbspessoatipoid','cpfpessoa','cnpjpessoa','nascpessoa'],
          order: ['id', 'ASC'],
          include: [
            {
              model: Tblpessoamidia,
              attributes: ['id', 'tblpessoaid', 'tbstypemidiaid'],
              include: [{
                model: Tbstypemidia,
                as: 'Tbstypemidium',
                attributes: ['id', 'namemidia'],
              }],
            },
            {
              model: Tblemail,
              as: 'Tblemails',
              attributes: ['id', 'email','confirmed'],
            }
          ],
        }],
      });
      return res.json(tipos);
    } catch {
      return res.json(null);
    }
  }

  // Método Show

  async show(req, res) {
    try {
      const flat = await Tbsflat.findByPk(req.params.id);
      return res.json(flat);
    } catch {
      return res.json(null);
    }
  }


  // Método Store

  async store(req, res) {
    try {
      const novoflat = await Tbsflat.create(req.body);
      res.json(novoflat);
    } catch (e) {
      res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  // Método Update

  async update(req, res) {
    try {
      if (!req.params.id) {
        return res.status(400).json({
          errors: ['BACK - ID não enviado.'],
        });
      }

      const flat = await Tbsflat.findByPk(req.params.id);

      if (!flat) {
        return res.status(400).json({
          errors: ['BACK - flat não existe.'],
        });
      }

      const novosDados = await Tbsflat.update(req.body);

      return res.json(novosDados);

    } catch (e) {
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
          errors: ['BACK - ID não enviado.'],
        });
      }

      const flat = await Tbsflat.findByPk(req.params.id);

      if (!flat) {
        return res.status(400).json({
          errors: ['BACK - flat não existe.'],
        });
      }

      await Tbsflat.destroy();

      return res.json(flat);

    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }


}

export default new TbspessoatipoController();
