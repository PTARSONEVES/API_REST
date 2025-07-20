import Tbsisssubitem from '../../models/issqn/Tbsisssubitem';
import Tbsissitem from '../../models/issqn/Tbsissitem';

class TbsisssubitemController {

  // index
  async index(req, res) {
    try {
      const flg = req.params;
      console.log('flg :',flg);
      if(flg.itemid <=0) {
        const subitems = await Tbsisssubitem.findAll({
          attributes: ['id', 'itemid','codsubitem','descrsubitem'],
          order: [['itemid', 'ASC'],['codsubitem', 'ASC']],
          include: [{
            model: Tbsissitem,
            attributes: ['id','coditem','descritem'],
          }]
        });
        return res.json(subitems);
      } else {
        const subitems = await Tbsisssubitem.findAll({
          where: { itemid: flg.itemid},
          attributes: ['id', 'itemid','codsubitem','descrsubitem'],
          order: [['itemid', 'ASC'],['codsubitem', 'ASC']],
          include: [{
            model: Tbsissitem,
            attributes: ['id','coditem','descritem'],
          }]
        });
        return res.json(subitems);
      }
    } catch(e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }
}

export default new TbsisssubitemController();
