import Tbsissitem from '../models/Tbsissitem';

class TbsissitemController {

  // Index

  async index(req, res) {
    try {
      const items = await Tbsissitem.findAll({
        attributes: ['id', 'coditem', 'descritem'],
        order: [['coditem', 'ASC']],
      });
      return res.json(items);
    } catch(e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

}

export default new TbsissitemController();
