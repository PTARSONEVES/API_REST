import Sequelize, { Model } from 'sequelize';

export default class Usertype extends Model {
  static init(sequelize) {
    super.init({
      typeuser: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 35],
            msg: 'Campo deve ter entre 3 e 35 caracteres',
          },
        },
      },
    }, {
      sequelize,
    });
  }

 static associate(models) {
    this.hasMany(models.User, { foreignKey: 'usertypeid'});
  }

}

