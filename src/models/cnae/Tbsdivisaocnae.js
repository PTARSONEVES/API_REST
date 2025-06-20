import Sequelize, {Model} from "sequelize";

export default class Tbsdivisaocnae extends Model {
  static init (sequelize) {
    super.init(
      {
        secaoid: {
          type: Sequelize.INTEGER,
          defaultValue: '1',
          allowNull: false,
        },
        coddivisao: {
          type: Sequelize.STRING,
          defaultValue: '',
          validate: {
            len: {
              args: [3],
              msg: 'BACK - Campo deve ter 3 caracteres',
            },
          },
        },
        descrdivisao: {
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
  }

}
