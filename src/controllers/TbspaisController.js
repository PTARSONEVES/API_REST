import Tbspais from "../models/Tbspais";

class TbspaisController {

  // Método Index

  async index(req, res) {
    try {
      const paises = await Tbspais.findAll();
      return res.json(paises);
    } catch {
      return res.json(null);
    }
  }

  // Método Show

  async show(req, res) {
    try {
      const pais = await Tbspais.findByPk(req.params.id);
      return res.json(pais);
    } catch {
      return res.json(null);
    }
  }


  // Método Store

  async store(req, res) {
    try {
      const novopais = await Tbspais.create(req.body);
      res.json(novopais);
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

      const pais = await Tbspais.findByPk(req.params.id);

      if (!pais) {
        return res.status(400).json({
          errors: ['BACK - pais não existe.'],
        });
      }

      const novosDados = await Tbspais.update(req.body);

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

      const pais = await Tbspais.findByPk(req.params.id);

      if (!pais) {
        return res.status(400).json({
          errors: ['BACK - pais não existe.'],
        });
      }

      await Tbspais.destroy();

      return res.json(pais);

    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }


}

export default new TbspaisController();
