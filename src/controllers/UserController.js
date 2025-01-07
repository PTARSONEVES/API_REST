import { password } from "../config/database";
import User from "../models/User";

class UserController {

  // Método Index

  async index(req, res) {
    try {
      const users = await User.findAll({
        attributes: ['id', 'usertypeid', 'name', 'lastname', 'alias', 'email',]
      });
      return res.json(users);
    } catch (e) {
      return res.json(null);
    }
  }

  // Método Show

  async show(req, res) {
    try {
      const user = await User.findByPk(req.params.id);
      const { id, usertypeid, name, lastname, alias, email } = user;
      return res.json({ id, usertypeid, name, lastname, alias, email });
    } catch (e) {
      return res.json(null);
    }
  }


  // Método Store

  async store(req, res) {
    try {
      const novoUser = await User.create(req.body);
      res.json(novoUser);
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
          errors: ['Usuário não existe.'],
        });
      }

      const novosDados = await user.update(req.body);

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
      const user = await User.findByPk(req.userId);

      if (!user) {
        return res.status(400).json({
          errors: ['Usuário não existe.'],
        });
      }

      await user.destroy();

      return res.json(user);

    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }


}

export default new UserController();
