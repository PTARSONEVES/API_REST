import Sequelize, { Model } from 'sequelize';

export default class Typemidia extends Model {
  static init(sequelize) {
    super.init({
      namemidia: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 35],
            msg: 'BACK - Campo deve ter entre 3 e 35 caracteres',
          },
        },
      },
    }, {
      sequelize,
    });
  }

 static associate(models) {
    this.hasMany(models.Usermidia, { foreignKey: 'typemidiaid'});
  }

}

