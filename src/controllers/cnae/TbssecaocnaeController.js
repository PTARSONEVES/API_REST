import Tbssecaocnae from '../../models/cnae/Tbssecaocnae';

class TbssecaocnaeController {

  // Index

  async index(req, res) {
    const flg = req.params;
    console.log(flg);
    try {
      if(flg.id <=0 ) {
        const items = await Tbssecaocnae.findAll({
          attributes: ['id', 'codsecao', 'descrsecao'],
          order: [['codsecao', 'ASC']],
        });
        return res.json(items);
      } else {
        const items = await Tbssecaocnae.findAll({
          where: { id: flg.id },
          attributes: ['id', 'codsecao', 'descrsecao'],
          order: [['codsecao', 'ASC']],
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

export default new TbssecaocnaeController();
