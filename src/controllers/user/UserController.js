//import { password } from "../config/database";
import Tblpessoa from "../../models/pessoa/Tblpessoa";
import Tblemail from "../../models/pessoa/Tblemail";
import User from "../../models/user/User";
import Userfoto from "../../models/user/Userfoto";
import Usertype from "../../models/user/Usertype";

class UserController {

  // Método Index

  async index(req, res) {
    try {
      const users = await User.findAll({
        attributes: ['id', 'pessoaid', 'usertypeid'],
        order: [['id', 'DESC'], [Userfoto, 'id', 'DESC']],
        include: [{
          model: Userfoto,
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
          model: Usertype,
          attributes: ['id', 'typeuser']
        }],
      });
      return res.json(users);
    } catch(e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  // Método Show

  async show(req, res) {
    try {
      const user = await User.findByPk(req.userId, {
        attributes: ['id', 'pessoaid', 'usertypeid'],
        order: [['id', 'DESC'], [Userfoto, 'id', 'DESC']],
        include: [{
          model: Userfoto,
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
          model: Usertype,
          attributes: ['id', 'typeuser']
        }],
      });
      return res.json(user);
    } catch(e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }


  // Método Store

  async store(req, res) {
    try {
      const novoUser = await User.create(req.body);
      const { id, pessoaid, usertypeid } = novoUser;
      return res.json({ id, name, lastname, alias, email, usertypeid });
    } catch (e) {
      res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  // Método Update

  async update(req, res) {
    try {
      const user = await User.findByPk(req.userId);

      if (!user) {
        return res.status(400).json({
          errors: ['BACK -  Usuário não existe.'],
        });
      }

      const novosDados = await user.update(req.body);
      const { id, pessoaid, usertypeid } = novosDados;
      return res.json({ id, pessoaid, usertypeid });
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

      const user = await User.findByPk(req.params.id);

      if (!user) {
        return res.status(400).json({
          errors: ['BACK -  Usuário não existe.'],
        });
      }

      await user.destroy();

      return res.json(null);

    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }


}

export default new UserController();
