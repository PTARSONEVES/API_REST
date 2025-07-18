import Tbsflat from "../../models/flats/Tbsflat";
import Tbstipoflat from "../../models/flats/Tbstipoflat";

class TbsflatController {

  // Método Index

  async index(req, res) {
    try {
      const flats = await Tbsflat.findAll({
        attributes: ['id', 'flatnome', 'flatbloco', 'flatpiso','flatnum','tbstipoflatid'],
        order: [['flatbloco', 'ASC'],['flatpiso', 'ASC'],['flatnum', 'ASC']],
        include: [{
          model: Tbstipoflat,
          attributes: ['id','areaflat', 'quartosflat','salasflat','varandasflat','wcsflat','cozinhasflat','garagensflat'],
        }]
      });
      return res.json(flats);
    } catch {
      return res.json(null);
    }
  }

  // Método Show

  async show(req, res) {
    try {
      const flat = await Tbsflat.findByPk(req.params.id);
      return res.json(flat);
    } catch {
      return res.json(null);
    }
  }


  // Método Store

  async store(req, res) {
    try {
      const novoflat = await Tbsflat.create(req.body);
      res.json(novoflat);
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

      const flat = await Tbsflat.findByPk(req.params.id);

      if (!flat) {
        return res.status(400).json({
          errors: ['BACK - flat não existe.'],
        });
      }

      const novosDados = await Tbsflat.update(req.body);

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

      const flat = await Tbsflat.findByPk(req.params.id);

      if (!flat) {
        return res.status(400).json({
          errors: ['BACK - flat não existe.'],
        });
      }

      await Tbsflat.destroy();

      return res.json(flat);

    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }


}

export default new TbsflatController();
