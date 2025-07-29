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
*/

      const pessoas = await Tblpessoa.findAll({
        attributes: ['id', 'nomepessoa','tbspessoatipoid', 'cpfpessoa', 'cnpjpessoa', 'nascpessoa'],
        order: [['id', 'ASC']],
        include: [
          {
            attributes: ['id', 'email', 'confirmed'],
            model: Tblemail,
            as: 'Tblemails',
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
              as: 'Tbstypemidium',
              attributes: ['id', 'namemidia']
            }]
          },
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
