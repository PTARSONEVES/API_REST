import Usertype from "../models/Usertype";

class UsertypeController {

  // Método Index

  async index(req, res) {
    try {
      const usertypes = await Usertype.findAll();
      return res.json(usertypes);
    } catch (e) {
      return res.json(null);
    }
  }

  // Método Show

  async show(req, res) {
    try {
      const usertype = await Usertype.findByPk(req.params.id);
      return res.json(usertype);
    } catch (e) {
      return res.json(null);
    }
  }


  // Método Store

  async store(req, res) {
    try {
      const novousertype = await Usertype.create(req.body);
      res.json(novousertype);
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
          errors: ['ID não enviado.'],
        });
      }

      const usertype = await Usertype.findByPk(req.params.id);

      if (!usertype) {
        return res.status(400).json({
          errors: ['Tipo de usuário não existe.'],
        });
      }

      const novosDados = await Usertype.update(req.body);

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
          errors: ['ID não enviado.'],
        });
      }

      const usertype = await Usertype.findByPk(req.params.id);

      if (!usertype) {
        return res.status(400).json({
          errors: ['Tipo de usuário não existe.'],
        });
      }

      await usertype.destroy();

      return res.json(user);

    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }


}

export default new UsertypeController();
