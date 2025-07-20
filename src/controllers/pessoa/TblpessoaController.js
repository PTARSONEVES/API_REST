//import { password } from "../config/database";
import Tblpessoa from "../models/pessoa/Tblpessoa";
import Tblemail from "../models/pessoa/Tblemail";
//import Tblpessoa from "../models/Tblpessoa/Tblpessoa";
//import Tblpessoafoto from "../models/Tblpessoa/Tblpessoafoto";
//import Tblpessoatype from "../models/Tblpessoa/Tblpessoatype";

class TblpessoaController {

  // Método Index

  async index(req, res) {
    try {
      const pessoas = await Tblpessoa.findAll({
        attributes: ['id', 'pessoaid', 'Tblpessoatypeid'],
        order: [['id', 'DESC'], [Tblpessoafoto, 'id', 'DESC']],
        include: [{
          model: Tblpessoafoto,
          attributes: ['url', 'id', 'filename']
        },
        {
          model: Tblemail,
          attributes: ['id', 'nomepessoa', 'cpfpessoa', 'cnpjpessoa', 'nascpessoa'],
          include: [{
            model: Tblemail,
            attributes: ['id', 'email', 'confirmed']
          }]
        },
        {
          model: Tblpessoatipo,
          attributes: ['id', 'typeTblpessoa']
        }],
      });
      return res.json(Tblpessoas);
    } catch(e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

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


}

export default new TblpessoaController();
