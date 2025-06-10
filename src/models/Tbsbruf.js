import Sequelize, {Model} from "sequelize";

export default class Tbsbruf extends Model {
  static init (sequelize) {
    super.init(
      {
        paisid: {
          type: Sequelize.INTEGER,
          defaultValue: 103,
        },
        coduf: {
          type: Sequelize.INTEGER,
          defaultValue: '',
        },
        uf: {
          type: Sequelize.STRING,
          defaultValue: '',
          validate: {
            len: {
              args: [2],
              msg: 'BACK - Campo deve ter 2 caracteres',
            },
          },
        },
        ufname: {
          type: Sequelize.STRING,
          defaultValue: '',
          validate: {
            len: {
              args: [3, 40],
              msg: 'BACK - Campo deve ter entre 3 e 40 caracteres',
            },
          },
        },
        ufnamesem: {
          type: Sequelize.STRING,
          defaultValue: '',
          validate: {
            len: {
              args: [3, 40],
              msg: 'BACK - Campo deve ter entre 3 e 40 caracteres',
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
    this.belongsTo(models.Tbspais, { foreignKey: 'paisid'});
  }

}
