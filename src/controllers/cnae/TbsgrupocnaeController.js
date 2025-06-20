import Tbsgrupocnae from '../../models/cnae/Tbsgrupocnae';
import Tbssecaocnae from '../../models/cnae/Tbssecaocnae';
import Tbsdivisaocnae from '../../models/cnae/Tbsdivisaocnae';

class TbsgrupocnaeController {

  // Index

  async index(req, res) {
    try {
      const items = await Tbsgrupocnae.findAll({
        attributes: ['id', 'codgrupo', 'descrgrupo'],
        order: [['codgrupo', 'ASC']],
        include: {
          model: Tbsdivisaocnae,
          attributes: ['id','secaoid','coddivisao','descrdivisao'],
          order: [['coddivisao','ASC']],
          include: {
            model: Tbssecaocnae,
            attributes: ['id','codsecao','descrsecao'],
            order: [['codsecao','ASC']],
          },
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

export default new TbsgrupocnaeController();
