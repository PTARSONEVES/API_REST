import Tbsgrupocnae from '../../models/cnae/Tbsgrupocnae';
import Tbssecaocnae from '../../models/cnae/Tbssecaocnae';
import Tbsdivisaocnae from '../../models/cnae/Tbsdivisaocnae';
import { Op } from 'sequelize';
class TbsgrupocnaeController {

  // Index

  async index(req, res) {
    const flg = req.params;
    console.log(flg);
    try {
      if(flg.id <= 0) {
        if(flg.secaoid <= 0) {
          const items = await Tbsgrupocnae.findAll({
            attributes: ['id', 'secaoid', 'divisaoid', 'codgrupo', 'descrgrupo'],
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
        } else {
          const items = await Tbsgrupocnae.findAll({
            where: {
              [Op.and]: [
                {secaoid: flg.secaoid},
                {divisaoid: flg.divisaoid},
              ],
            },
            attributes: ['id', 'secaoid', 'divisaoid', 'codgrupo', 'descrgrupo'],
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
            },
          });
          return res.json(items);
        }
      } else {
        const items = await Tbsgrupocnae.findAll({
          where: {id: flg.id},
          attributes: ['id', 'secaoid', 'divisaoid', 'codgrupo', 'descrgrupo'],
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
      }
    } catch(e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

}

export default new TbsgrupocnaeController();
