import Sequelize, { Model } from 'sequelize';

export default class Tbsflat extends Model {
  static init(sequelize) {
    super.init({
      flatnome: {
        type: Sequelize.STRING,
        defaultValue: '',
      },
      flatbloco: {
        type: Sequelize.STRING,
        defaultValue: '',
      },
      flatpiso: {
        type: Sequelize.STRING,
        defaultValue: '',
      },
      flatnum: {
        type: Sequelize.STRING,
        defaultValue: '',
      },
      tpflatid: {
       type: Sequelize.INTEGER,
       allowNull: true,
      },
    }, {
      sequelize,
      underscored: false,
    });

    return this;
  }
    static associate(models) {
    this.belongsTo(models.Tbstipoflat), { foreignKey: 'tpflatid'};
  }

}
