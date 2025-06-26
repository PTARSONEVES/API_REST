import Tbssubclassecnae from '../../models/cnae/Tbssubclassecnae';
import Tbsclassecnae from '../../models/cnae/Tbsclassecnae';
import Tbsgrupocnae from '../../models/cnae/Tbsgrupocnae';
import Tbsdivisaocnae from '../../models/cnae/Tbsdivisaocnae';
import Tbssecaocnae from '../../models/cnae/Tbssecaocnae';
import { Op } from 'sequelize';

class TbssubclassecnaeController {

  // Index

  async index(req, res) {
    const flg = req.params;
    console.log(flg);
    try {
      if(flg.id <= 0) {
        if(flg.secaoid <= 0) {
          const items = await Tbssubclassecnae.findAll({
            attributes: ['id', 'secaoid', 'divisaoid', 'grupoid', 'classeid', 'codsubclasse', 'descrsubclasse'],
            order: [['codsubclasse', 'ASC']],
            include:{
              model: Tbsclassecnae,
              attributes: ['id','codclasse','descrclasse'],
              order: [['id','ASC']],
              include: {
                model: Tbsgrupocnae,
                attributes: ['id','codgrupo','descrgrupo'],
                order: [['id','ASC']],
                include: {
                  model: Tbsdivisaocnae,
                  attributes: ['id','coddivisao','descrdivisao'],
                  order: [['id','ASC']],
                  include: {
                    model: Tbssecaocnae,
                    attributes: ['id','codsecao','descrsecao'],
                    order: [['id','ASC']],
                  },
                },
              },
            }
          });
          return res.json(items);
        } else {
          const items = await Tbssubclassecnae.findAll({
            where: {
              [Op.and]: [
                {secaoid: flg.secaoid},
                {divisaoid: flg.divisaoid},
                {grupoid: flg.grupoid},
                {classeid: flg.classeid},
              ],
            },
            attributes: ['id', 'secaoid', 'divisaoid', 'grupoid', 'classeid', 'codsubclasse', 'descrsubclasse'],
            order: [['codsubclasse', 'ASC']],
            include:{
              model: Tbsclassecnae,
              attributes: ['id','codclasse','descrclasse'],
              order: [['id','ASC']],
              include: {
                model: Tbsgrupocnae,
                attributes: ['id','codgrupo','descrgrupo'],
                order: [['id','ASC']],
                include: {
                  model: Tbsdivisaocnae,
                  attributes: ['id','coddivisao','descrdivisao'],
                  order: [['id','ASC']],
                  include: {
                    model: Tbssecaocnae,
                    attributes: ['id','codsecao','descrsecao'],
                    order: [['id','ASC']],
                  },
                },
              },
            }
          });
          return res.json(items);
        }
      } else {
        const items = await Tbssubclassecnae.findAll({
          where: {id: flg.id},
          attributes: ['id', 'secaoid', 'divisaoid', 'grupoid', 'classeid', 'codsubclasse', 'descrsubclasse'],
          order: [['codsubclasse', 'ASC']],
          include:{
            model: Tbsclassecnae,
            attributes: ['id','codclasse','descrclasse'],
            order: [['id','ASC']],
            include: {
              model: Tbsgrupocnae,
              attributes: ['id','codgrupo','descrgrupo'],
              order: [['id','ASC']],
              include: {
                model: Tbsdivisaocnae,
                attributes: ['id','coddivisao','descrdivisao'],
                order: [['id','ASC']],
                include: {
                  model: Tbssecaocnae,
                  attributes: ['id','codsecao','descrsecao'],
                  order: [['id','ASC']],
                },
              },
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

export default new TbssubclassecnaeController();
