import Sequelize, { Model } from 'sequelize';

export default class Midia extends Model {

  static init(sequelize) {
    super.init(
      {
        pessoaid: {
          type: Sequelize.INTEGER,
          defaultValue: null,
        },
        midiatpoid: {
          type: Sequelize.INTEGER,
          defaultValue: null,
        },
     },
      {
        sequelize,
        underscored: false,
        tableName: 'midias',
      },
    );

  }

 static associate(models) {
    this.belongsTo(models.Pessoa, {
      foreignKey: 'pessoaid',
    });
    this.belongsTo(models.Midiatpo, {
      foreignKey: 'midiatpoid',
    });
  }
}

