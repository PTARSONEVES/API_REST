import Sequelize, { Model } from 'sequelize';

export default class Sitreserva extends Model {
  static init(sequelize) {
    super.init({
      nomstatus: {
        type: Sequelize.STRING,
        defaultValue: 'Pendente',
      },
    }, {
      sequelize,
      underscored: false,
      tableName: 'sitreservas',
    });

    return this;
  }
    static associate(models) {
    this.hasMany(models.Reserva, { foreignKey: { name: 'sitreservaid', allowNull: true } });
  }

}
