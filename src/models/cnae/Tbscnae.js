import Sequelize, {Model} from "sequelize";

export default class Tbscnae extends Model {
  static init (sequelize) {
    super.init(
      {
        secaoid: {
          type: Sequelize.INTEGER,
          defaultValue: 1,
        },
        divisaoid: {
          type: Sequelize.INTEGER,
          defaultValue: 1,
        },
        grupoid: {
          type: Sequelize.INTEGER,
          defaultValue: 1,
        },
        classeid: {
          type: Sequelize.INTEGER,
          defaultValue: 1,
        },
        subclasseid: {
          type: Sequelize.INTEGER,
          defaultValue: 1,
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
    this.belongsTo(models.Tbsclassecnae, {foreignKey: 'classeid'});
    this.belongsTo(models.Tbssubclassecnae, {foreignKey: 'subclasseid'});
  }

}
