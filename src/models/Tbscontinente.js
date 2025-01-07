import Sequelize, { Model } from 'sequelize';

export default class Tbscontinente extends Model {
  static init(sequelize) {
    super.init({
      namecontinente: {
        type: Sequelize.STRING(100),
        defaultValue: '',
        allowNull: false,
      },
    }, {
      sequelize,
    });
  }
}
