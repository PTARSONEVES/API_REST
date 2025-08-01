import Sequelize, { Model } from 'sequelize';

export default class Reserva extends Model {
  static init(sequelize) {
    super.init({
      pessoaid: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      checkin: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      checkout: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      numflats: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      numhospedes: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      vlrreserva: {
        type: Sequelize.DECIMAL,
        allowNull: false,
      },
      vlrpago: {
        type: Sequelize.DECIMAL,
        allowNull: false,
      },
      sitreservaid: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      observacao: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      flatlocid: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
    }, {
      sequelize,
      underscored: false,
      tableName: 'reservas',
    });

    return this;
  }
    static associate(models) {
    this.hasMany(models.Flatloc, { foreignKey: {name: 'reservaid', allowNull: true }});
    this.belongsTo(models.Sitreserva, { foreignKey: { name: 'sitreservaid', allowNull: true } });
    this.belongsTo(models.Pessoa, { foreignKey: { name: 'pessoaid', allowNull: true } });
  }

}
