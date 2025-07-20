import Sequelize, {Model} from "sequelize";

export default class Tbsissdnac extends Model {
  static init (sequelize) {
    super.init(
      {
        itemid: {
          type: Sequelize.INTEGER,
          defaultValue: 1,
        },
        subitemid: {
          type: Sequelize.INTEGER,
          defaultValue: 1,
        },
        coddnac: {
          type: Sequelize.STRING,
          defaultValue: '',
          validate: {
            len: {
              args: [2],
              msg: 'BACK - Campo deve ter 2 caracteres',
            },
          },
        },
        decritemdnac: {
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
    this.belongsTo(models.Tbsisssubitem, {foreignKey: 'subitemid'});
  }
}
