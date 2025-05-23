//import { password } from "../config/database";
import Email from "../models/Email";
import User from "../models/User";
import Userfoto from "../models/Userfoto";
import Usertype from "../models/Usertype";

class UserController {

  // Método Index

  async index(req, res) {
    try {
      const users = await User.findAll({
        attributes: ['id', 'name', 'alias', 'email'],
        order: [['id', 'DESC'], [Userfoto, 'id', 'DESC']],
        include: [{
          model: Userfoto,
          attributes: ['url', 'id', 'filename']
        },
        {
          model: Usertype,
          attributes: ['id', 'typeuser']
        },
        {
          model: Email,
          attributes: ['id', 'email', 'confirmed']
        }]
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
        attributes: ['id', 'name', 'alias', 'email'],
        order: [['id', 'DESC'], [Userfoto, 'id', 'DESC']],
        include: [{
          model: Userfoto,
          attributes: ['url', 'id', 'filename']
        },
        {
          model: Usertype,
          attributes: ['id', 'typeuser']
        },
        {
          model: Email,
          attributes: ['id', 'email', 'confirmed']
        }]
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
      const { id, name, lastname, alias, email, usertypeid } = novoUser;
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
      const { id, name, lastname, alias, email, usertypeid } = novosDados;
      return res.json({ id, name, lastname, alias, email, usertypeid });
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
