import Sequelize, { Model } from 'sequelize';

export default class Flatloc extends Model {
  static init(sequelize) {
    super.init({
      reservaid: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      flatid: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
    }, {
      sequelize,
      underscored: false,
      tableName: 'flatlocs',
    });

    return this;
  }
    static associate(models) {
      this.belongsTo(models.Reserva, { foreignKey: { name: 'reservaid', allowNull: true } });
      this.belongsTo(models.Flat, { foreignKey: {name: 'flatid', allowNull: true }});
  }

}
