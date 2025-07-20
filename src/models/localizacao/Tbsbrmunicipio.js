import Sequelize, {Model} from "sequelize";

export default class Tbsbrmunicipio extends Model {
  static init (sequelize) {
    super.init(
      {
        ibgeFull: {
          type: Sequelize.STRING,
          defaultValue: '',
          validate: {
            len: {
              args: [7],
              msg: 'BACK - Campo deve ter 7 caracteres',
            },
          },
        },
        ibgeShort: {
          type: Sequelize.STRING,
          defaultValue: '',
          validate: {
            len: {
              args: [5],
              msg: 'BACK - Campo deve ter 5 caracteres',
            },
          },
        },
        ufid: {
          type: Sequelize.INTEGER,
          defaultValue: 1,
        },
        cityname: {
          type: Sequelize.STRING,
          defaultValue: '',
          validate: {
            len: {
              args: [3, 80],
              msg: 'BACK - Campo deve ter entre 3 e 80 caracteres',
            },
          },
        },
        citylaw: {
          type: Sequelize.INTEGER,
          defaultValue: 0,
        },
        datelaw: {
          type: Sequelize.DATE,
        },
        dateinstall: {
          type: Sequelize.DATE,
        },
        citynamesem: {
          type: Sequelize.STRING,
          defaultValue: '',
          validate: {
            len: {
              args: [3, 80],
              msg: 'BACK - Campo deve ter entre 3 e 80 caracteres',
            },
          },
        },
        cityddd: {
          type: Sequelize.STRING,
          defaultValue:'00',
          validate: {
            len: {
              args: [2],
              msg: 'BACK - Campo deve ter 2 caracteres',
            },
          },
        },
      },
      {
        sequelize,
      }
    );
  }

  static associate(models) {
    this.belongsTo(models.Tbsbruf, { foreignKey: 'ufid'});
  }


}
