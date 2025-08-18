import Sequelize, { Model } from 'sequelize';

export default class Regiao extends Model {
  static init(sequelize) {
    super.init(
      {
        paisid: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        regiaoname: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        regiaonamesem: {
          type: Sequelize.STRING,
          allowNull: false,
        },
      },
      {
        sequelize,
        underscored: false,
        tableName: "regioes",
      }
    );
  }


  static associate(models) {
    this.belongsTo(models.Pais, { foreignKey: 'paisid'});
  }

}
