import Sequelize, { Model } from 'sequelize';

export default class Usertype extends Model {
  static init(sequelize) {
    super.init({
      typeuser: Sequelize.STRING,
    }, {
      sequelize,
    });
  }
}
