import Sequelize, { Model } from 'sequelize';

export default class Usertype extends Model {
  static init(sequelize) {
    super.init({
      tipouser: {
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
      tableName: 'usertypes',
    });
  }

 static associate(models) {
    this.hasMany(models.User, { foreignKey: 'usertypeid'});
  }

}

