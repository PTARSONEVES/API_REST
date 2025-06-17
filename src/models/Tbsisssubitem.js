import Sequelize, {Model} from "sequelize";

export default class Tbsisssubitem extends Model {
  static init (sequelize) {
    super.init(
      {
        itemid: {
          type: Sequelize.INTEGER,
          defaultValue: 1,
        },
        codsubitem: {
          type: Sequelize.STRING,
          defaultValue: '',
          validate: {
            len: {
              args: [2],
              msg: 'BACK - Campo deve ter 2 caracteres',
            },
          },
        },
        decrsubitem: {
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
    this.belongsTo(models.Tbsissitem, {foreignKey: 'itemid'});
  }
}
