import { password } from "../config/database";
import User from "../models/User";
import Userfoto from "../models/Userfoto";
import Usertype from "../models/Usertype";

class UserController {

  // Método Index

  async index(req, res) {
    const users = await User.findAll({
      attributes: ['id', 'name', 'lastname', 'alias', 'email', 'usertypeid'],
      order: [['id', 'DESC'],[Userfoto, 'id', 'DESC']],
      include: [
        {
          model: Userfoto,
          foreignKey: 'userid',
          attributes: ['id', 'filename', 'url'],
        },
//        {
//          model: Usertype,
//          foreignKey: 'usertypeid',
//          attributes: ['id', 'typeuser'],
//        },
      ],
    });
    return res.json(users);
  }


  // Método Show

  async show(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).json({
          errors: ['Faltando ID'],
        });
      }

      const user = await User.findByPk(
        id,
        {
          attributes: ['id', 'name', 'lastname', 'alias', 'email', 'usertypeid'],
          order: [['id', 'DESC'], [Userfoto, 'id', 'DESC']],
          include: {
            model: Userfoto,
            attributes: ['id', 'filename', 'url'],
          },
        },
      );

      if (!user) {
        return res.status(400).json({
          errors: ["Usuário não existe."],
        });
      }

      return res.json(user);
    } catch (e) {
      return res.json(null);
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
          errors: ['Usuário não existe.'],
        });
      }

      const novosDados = await user.update(req.body);
      const { id, name, lastname, alias, email, usertypeid } = novosDados;
      return res.json({ id, name, lastname, alias, email, usertypeid });
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

      return res.json(null);

    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }


}

export default new UserController();
