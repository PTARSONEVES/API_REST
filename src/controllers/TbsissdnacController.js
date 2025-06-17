import Tbsissdnac from '../models/Tbsissdnac';
import Tbsissitem from '../models/Tbsissitem';
import Tbsisssubitem from '../models/Tbsisssubitem';
import { Op } from 'sequelize';

class TbsissdnacController {

  // index
  async index(req,res) {
    try {
      const flg = req.params;
      if(flg.itemid <= 0) {
        if(flg.subitemid <= 0) {
          const dnacitems = await Tbsissdnac.findAll({
            attributes: ['id', 'itemid','subitemid','coddnac','descritemdnac'],
            order: [['itemid', 'ASC'],['subitemid', 'ASC'],['coddnac', 'ASC']],
            include: [{
              model: Tbsisssubitem,
              attributes: ['id','codsubitem','descrsubitem'],
              order: [['codsubitem','ASC']],
              include: [{
                model: Tbsissitem,
                attributes: ['id','coditem','descritem'],
                order: [['coditem','ASC']]
              }]
            }]
          });
          return res.json(dnacitems);
        } else {
          const dnacitems = await Tbsissdnac.findAll({
            where: {'subitemid': flg.subitemid},
            attributes: ['id', 'itemid','subitemid','coddnac','descritemdnac'],
            order: [['itemid', 'ASC'],['subitemid', 'ASC'],['coddnac', 'ASC']],
            include: [{
              model: Tbsisssubitem,
              attributes: ['id','codsubitem','descrsubitem'],
              order: [['codsubitem','ASC']],
              include: [{
                model: Tbsissitem,
                attributes: ['id','coditem','descritem'],
                order: [['coditem','ASC']]
              }]
            }]
          });
          return res.json(dnacitems);
        }
      } else {
        if(flg.subitemid <= 0) {
          const dnacitems = await Tbsissdnac.findAll({
            where: { itemid: flg.itemid},
            attributes: ['id', 'itemid','subitemid','coddnac','descritemdnac'],
            order: [['itemid', 'ASC'],['subitemid', 'ASC'],['coddnac', 'ASC']],
            include: [{
              model: Tbsisssubitem,
              attributes: ['id','itemid','codsubitem','descrsubitem'],
              order: [['itemid','ASC'],['codsubitem','ASC']],
              include: [{
                model: Tbsissitem,
                attributes: ['id','coditem','descritem'],
                order: [['coditem','ASC']]
              }]
            }]
          });
          return res.json(dnacitems);
        } else {
          console.log(flg);
          const dnacitems = await Tbsissdnac.findAll({
            where: {
              [Op.and]: [{itemid: flg.itemid}, {subitemid: flg.subitemid}],
            },
            attributes: ['id', 'itemid','subitemid','coddnac','descritemdnac'],
            order: [['itemid', 'ASC'],['subitemid', 'ASC'],['coddnac', 'ASC']],
            include: [{
              model: Tbsisssubitem,
              attributes: ['id','itemid','codsubitem','descrsubitem'],
              order: [['itemid','ASC'],['codsubitem','ASC']],
              include: [{
                model: Tbsissitem,
                attributes: ['id','coditem','descritem'],
                order: [['coditem','ASC']]
              }]
            }]
          });
          return res.json(dnacitems);
        }
      }
    } catch(e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }
}

export default new TbsissdnacController();
