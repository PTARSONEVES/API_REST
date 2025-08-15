import Sequelize, { Model } from 'sequelize';

export default class Continente extends Model {
  static init(sequelize) {
    super.init({
      namecontinente: {
        type: Sequelize.STRING(100),
        defaultValue: '',
        allowNull: false,
      },
    }, {
      sequelize,
      underscored: false,
      tableName: 'continentes',
    });
  }
}
