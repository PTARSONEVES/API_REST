import Sequelize, { Model } from 'sequelize';

export default class User extends Model {
  static init(sequelize) {
    super.init({
      name: Sequelize.STRING,
      lastname: Sequelize.STRING,
      alias: Sequelize.STRING,
      email: Sequelize.STRING,
    }, {
      sequelize,
    });
  }
}
