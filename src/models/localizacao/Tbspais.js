import Sequelize, { Model } from 'sequelize';

export default class Tbspais extends Model {
  static init(sequelize) {
    super.init(
      {
        continenteid: {
          type: Sequelize.INTEGER,
          defaultValue: 8,
        },
        paiscod: {
          type: Sequelize.STRING,
          defaultValue: '',
          validate: {
            len: {
              args: [1, 4],
              msg: 'BACK - Campo deve ter entre 1 e 4 caracteres',
            },
          },
        },
        paisname: {
          type: Sequelize.STRING(150),
          defaultValue: '',
          validate: {
            len: {
              args: [3, 150],
              msg: 'BACK - Campo deve ter entre 3 e 150 caracteres',
            },
          },
        },
        paispopname: {
          type: Sequelize.STRING(150),
          defaultValue: '',
          validate: {
            len: {
              args: [3, 150],
              msg: 'BACK - Campo deve ter entre 3 e 150 caracteres',
            },
          },
        },
        paispopsem: {
          type: Sequelize.STRING(150),
          defaultValue: '',
          validate: {
            len: {
              args: [3, 150],
              msg: 'BACK - Campo deve ter entre 3 e 150 caracteres',
            },
          },
        },
        paisddi: {
          type: Sequelize.STRING(4),
          defaultValue: '',
          validate: {
            len: {
              args: [1, 4],
              msg: 'BACK - Campo deve ter entre 1 e 4 caracteres',
            },
          },
        },
      },
      {
        sequelize,
        tableName: "tbspaises",
      }
    );
  }

  static associate(models) {
    this.belongsTo(models.Tbscontinente, { foreignKey: 'continenteid'});
  }

}
