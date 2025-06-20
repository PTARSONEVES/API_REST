import Tbssecaocnae from '../../models/cnae/Tbssecaocnae';

class TbssecaocnaeController {

  // Index

  async index(req, res) {
    try {
      const items = await Tbssecaocnae.findAll({
        attributes: ['id', 'codsecao', 'descrsecao'],
        order: [['codsecao', 'ASC']],
      });
      return res.json(items);
    } catch(e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

}

export default new TbssecaocnaeController();
