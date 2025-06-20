import Tbsdivisaocnae from '../../models/cnae/Tbsdivisaocnae';
import Tbssecaocnae from '../../models/cnae/Tbssecaocnae';

class TbsdivisaocnaeController {

  // Index

  async index(req, res) {
    try {
      const items = await Tbsdivisaocnae.findAll({
        attributes: ['id', 'coddivisao', 'descrdivisao'],
        order: [['coddivisao', 'ASC']],
        include: {
          model: Tbssecaocnae,
          attributes: ['id','codsecao','descrsecao'],
          order: [['codsecao','ASC']],
        }
      });
      return res.json(items);
    } catch(e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

}

export default new TbsdivisaocnaeController();
