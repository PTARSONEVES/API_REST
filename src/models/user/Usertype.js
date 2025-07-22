import Sequelize, { Model } from 'sequelize';

export default class Usertype extends Model {
  static init(sequelize) {
    super.init({
      userid: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'User',
          key: 'id',
        },
        onDelete: "SET NULL",
        onUpdate: "CASCADE",
      },
      typeuser: {
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
    this.hasMany(models.User, { foreignKey: 'usertypeid'});
  }

}

