import Sequelize, { Model } from 'sequelize';

export default class Hospede extends Model {
  static init(sequelize) {
    super.init({
      reservaid: {
       type: Sequelize.INTEGER,
       allowNull: true,
      },
      pessoaid: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
    }, {
      sequelize,
      underscored: false,
      tableName: 'flats',
    });

    return this;
  }
    static associate(models) {
    this.belongsTo(models.Reserva, { foreignKey: { name: 'flatid', allowNull: true } });
    this.belongsTo(models.Pessoa, { foreignKey: { name: 'pessoaid', allowNull: true } });
  }

}
