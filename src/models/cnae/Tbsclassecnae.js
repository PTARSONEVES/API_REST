import Sequelize, {Model} from "sequelize";

export default class Tbsclassecnae extends Model {
  static init (sequelize) {
    super.init(
      {
        secaoid: {
          type: Sequelize.INTEGER,
          defaultValue: '1',
          allowNull: false,
        },
        divisaoid: {
          type: Sequelize.INTEGER,
          defaultValue: '1',
          allowNull: false,
        },
        grupoid: {
          type: Sequelize.INTEGER,
          defaultValue: '1',
          allowNull: false,
        },
        codclasse: {
          type: Sequelize.STRING,
          defaultValue: '',
          validate: {
            len: {
              args: [5],
              msg: 'BACK - Campo deve ter 5 caracteres',
            },
          },
        },
        descrclasse: {
          type: Sequelize.TEXT,
          defaultValue: '',
        },
      },
      {
        sequelize,
      }
    );
  }
  static associate(models) {
    this.belongsTo(models.Tbssecaocnae, {foreignKey: 'secaoid'});
    this.belongsTo(models.Tbsdivisaocnae, {foreignKey: 'divisaoid'});
    this.belongsTo(models.Tbsgrupocnae, {foreignKey: 'grupoid'});
  }

}
