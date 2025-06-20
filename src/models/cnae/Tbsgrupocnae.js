import Sequelize, {Model} from "sequelize";

export default class Tbsgrupocnae extends Model {
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
        codgrupo: {
          type: Sequelize.STRING,
          defaultValue: '',
          validate: {
            len: {
              args: [2],
              msg: 'BACK - Campo deve ter 2 caracteres',
            },
          },
        },
        descrgrupo: {
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
  }

}
