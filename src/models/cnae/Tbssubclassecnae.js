import Sequelize, {Model} from "sequelize";

export default class Tbssubclassecnae extends Model {
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
        classeid: {
          type: Sequelize.INTEGER,
          defaultValue: '1',
          allowNull: false,
        },
        codsubclasse: {
          type: Sequelize.STRING,
          defaultValue: '',
          validate: {
            len: {
              args: [7],
              msg: 'BACK - Campo deve ter 7 caracteres',
            },
          },
        },
        descrsubclasse: {
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
    this.belongsTo(models.Tbsclassecnae, {foreignKey: 'classeid'});
  }

}
