import Tbscnae from '../../models/cnae/Tbscnae';
import Tbssecaocnae from '../../models/cnae/Tbssecaocnae';
import Tbsdivisaocnae from '../../models/cnae/Tbsdivisaocnae';
import Tbsgrupocnae from '../../models/cnae/Tbsgrupocnae';
import Tbsclassecnae from '../../models/cnae/Tbsclassecnae';
import Tbssubclassecnae from '../../models/cnae/Tbssubclassecnae';
import { Model, Op } from 'sequelize';

class TbscnaeController {

  // Index

  async index(req,res) {
    try {
      const flg = req.params;
      console.log('flg :',flg);
      if(flg.secaoid <= 0) {
        const secoes = await Tbssecaocnae.findAll({
          attributes: ['id','codsecao','descrsecao'],
          order: [['codsecao','ASC']],
        });
        return res.json(secoes);
      } else {
        if(flg.divisaoid <= 0) {
          const divisoes = await Tbsdivisaocnae.findAll({
            attributes: ['id','coddivisao','descrdivisao'],
            order: [['coddivisao','ASC']],
          });
          return res.json(divisoes);
        } else {
          if(flg.grupoid <= 0) {
            const grupos = await Tbsgrupocnae.findAll({
              attributes: ['id','codgrupo','descrgrupo'],
              order: [['codgrupo','ASC']],
            });
            return res.json(grupos);
          } else {
            if(flg.classeid <= 0) {
              const classes = await Tbsclassecnae.findAll({
                attributes: ['id','codclasse','descrclasse'],
                order: [['codclasse','ASC']],
              });
              return res.json(classes);
            } else {
              if(flg.subclasseid <= 0) {
                const subclasses = await Tbssubclassecnae.findAll({
                  attributes: ['id','codsubclasse','descrsubclasse'],
                  order: [['codsubclasse','ASC']],
                });
                return res.json(subclasses);
              } else {
                const cnae = await Tbscnae.findAll({
                  where: {
                    [Op.and]: [
                      {secaoid: flg.secaoid},
                      {divisaoid: flg.divisaoid},
                      {grupoid: flg.grupoid},
                      {classeid: flg.classeid},
                      {subclasseid: flg.subclasseid},
                    ],
                  },
                  includes: [
                    {
                      Model: Tbssecaocnae,
                      attributes: ['id','codsecao','descrsecao'],
                    },
                    {
                      Model: Tbsdivisaocnae,
//                      attributes: ['id','codsecao','descrsecao'],
                    },
                    {
                      Model: Tbsgrupocnae,
//                      attributes: ['id','codsecao','descrsecao'],
                    },
                    {
                      Model: Tbsclassecnae,
//                      attributes: ['id','codsecao','descrsecao'],
                    },
                    {
                      Model: Tbssubclassecnae,
//                      attributes: ['id','codsecao','descrsecao'],
                    },
                  ]
                  });
                return res.json(cnae);
              }
            }
          }
        }
      }
    } catch(e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

}

export default new TbscnaeController()
