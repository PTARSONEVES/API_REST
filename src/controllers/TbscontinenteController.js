import Tbscontinente from "../models/Tbscontinente";

class TbscontinenteController {

  // Método Index

  async index(req, res) {
    try {
      const continentes = await Tbscontinente.findAll();
      return res.json(continentes);
    } catch (e) {
      return res.json(null);
    }
  }

  // Método Show

  async show(req, res) {
    try {
      const continente = await Tbscontinente.findByPk(req.params.id);
      return res.json(continente);
    } catch (e) {
      return res.json(null);
    }
  }


  // Método Store

  async store(req, res) {
    try {
      const novocontinente = await Tbscontinente.create(req.body);
      res.json(novocontinente);
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

      const continente = await Tbscontinente.findByPk(req.params.id);

      if (!continente) {
        return res.status(400).json({
          errors: ['Continente não existe.'],
        });
      }

      const novosDados = await Tbscontinente.update(req.body);

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

      const continente = await Tbscontinente.findByPk(req.params.id);

      if (!continente) {
        return res.status(400).json({
          errors: ['Continente não existe.'],
        });
      }

      await Tbscontinente.destroy();

      return res.json(user);

    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }


}

export default new TbscontinenteController();
