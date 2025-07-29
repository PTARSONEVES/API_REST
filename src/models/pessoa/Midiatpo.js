import Sequelize, { Model } from 'sequelize';

export default class Midiatpo extends Model {
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
      underscored: false,
      tableName: 'midiatpos',
    });
  }

// static associate(models) {
//    this.hasMany(models.Midia, {
//      foreignKey: 'midiatpoid',
//      sourceKey: 'id',
//    });
//  }

}

