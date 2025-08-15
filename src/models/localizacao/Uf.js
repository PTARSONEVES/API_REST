import Sequelize, {Model} from "sequelize";

export default class Uf extends Model {
  static init (sequelize) {
    super.init(
      {
        paisid: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        regiaoid: {
          type: Sequelize.INTEGER,
          defaultValue: '',
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
        underscored: false,
        tableName: 'ufs',
      }
    );
  }

  static associate(models) {
    this.belongsTo(models.Pais, { foreignKey: 'paisid'});
    this.belongsTo(models.Regiao, { foreignKey: 'regiaoid'});
    this.hasMany(models.Uf, {foreignKey: 'ufid'});
  }

}
