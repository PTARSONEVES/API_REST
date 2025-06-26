import Tbsdivisaocnae from '../../models/cnae/Tbsdivisaocnae';
import Tbssecaocnae from '../../models/cnae/Tbssecaocnae';
import { Op } from 'sequelize';

class TbsdivisaocnaeController {

  // Index

  async index(req, res) {
    const flg = req.params;
    console.log('FLG Divisões: ',flg);
    try {
      if(flg.id <= 0) {
        if(flg.secaoid <= 0) {
          const items = await Tbsdivisaocnae.findAll({
            attributes: ['id', 'secaoid', 'coddivisao', 'descrdivisao'],
            order: [['coddivisao', 'ASC']],
            include: {
              model: Tbssecaocnae,
              attributes: ['id','codsecao','descrsecao'],
              order: [['codsecao','ASC']],
            }
          });
          return res.json(items);
        } else {
          const items = await Tbsdivisaocnae.findAll({
            where: { secaoid: flg.secaoid},
            attributes: ['id', 'secaoid', 'coddivisao', 'descrdivisao'],
            order: [['coddivisao', 'ASC']],
            include: {
              model: Tbssecaocnae,
              attributes: ['id', 'codsecao','descrsecao'],
              order: [['codsecao','ASC']],
            }
          });
          return res.json(items);
        }
      } else {
        const items = await Tbsdivisaocnae.findAll({
          where: {
            [Op.and]: [{secaoid: flg.secaoid},{id: flg.id},],
          },
          attributes: ['id', 'secaoid', 'coddivisao', 'descrdivisao'],
          order: [['coddivisao', 'ASC']],
          include: {
            model: Tbssecaocnae,
            attributes: ['id','codsecao','descrsecao'],
            order: [['codsecao','ASC']],
          }
        });
        return res.json(items);
      }
    } catch(e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

}

export default new TbsdivisaocnaeController();
