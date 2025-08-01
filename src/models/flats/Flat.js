import Sequelize, { Model } from 'sequelize';

export default class Flat extends Model {
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
      flattpoid: {
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
    this.belongsTo(models.Flattpo), { foreignKey: {name: 'flattpoid',}};
    this.hasMany(models.Flatloc, { foreignKey: { name: 'flatid', allowNull: true } });
    this.belongsTo(models.Pessoa, { foreignKey: { name: 'pessoaid', allowNull: true } });
  }

}
