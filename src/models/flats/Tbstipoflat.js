import Sequelize, { Model } from 'sequelize';

export default class Tbstipoflat extends Model {
  static init(sequelize) {
    super.init({
      areaflat: {
        type: Sequelize.FLOAT(10,4),
        defaultValue: 0,
        allowNull: false,
      },
      quartosflat: {
        type: Sequelize.INTEGER,
        defaultValue: 1,
        allowNull: false,
      },
    }, {
      sequelize,
    });
  }
}
