//import { password } from "../config/database";
import Email from "../models/Tblemail";
import User from "../models/User";

class EmailController {

  // Método Index

  async index(req, res) {
    try {
      const emails = await Email.findAll({
        attributes: ['id', 'email', 'confirmed'],
        order: [['id', 'DESC'], [User, 'id', 'DESC']],
        include: [{
          model: User,
          attributes: ['id', 'userid']
        }]
      });
      return res.json(emails);
    } catch(e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  // Método Show

  async show(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).json({
          errors: ['BACK -  Id do usuário não informada.'],
        });
      }

      const email = await Email.findByPk(id, {
        attributes: ['id', 'email', 'confirmed'],
        order: [['id', 'DESC']],
        include: [{
          model: User,
          attributes: ['id', 'userid']
        }]
      });
      return res.json(email);
    } catch(e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }


  // Método Store

  async store(req, res) {
    try {
      const novoEmail = await Email.create(req.body);
      const { id, email, confirmed, userid } = novoEmail;
      return res.json({ id, email, confirmed, userid });
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
          errors: ['BACK -  Id do email não informada.'],
        });
      }
      const emailup = await Email.findByPk(req.params.id);

      if (!emailup) {
        return res.status(400).json({
          errors: ['BACK -  Email não existe.'],
        });
      }

      const novosDados = await email.update(req.body);
      const { id, email, confirmed, userid } = novosDados;
      return res.json({ id, email, confirmed, userid });
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
          errors: ['BACK -  Id do email não informada.'],
        });
      }

      const email = await Email.findByPk(req.params.id);

      if (!email) {
        return res.status(400).json({
          errors: ['BACK -  Email não existe.'],
        });
      }

      await email.destroy();

      return res.json(null);

    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }


}

export default new EmailController();
