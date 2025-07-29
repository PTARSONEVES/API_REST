import Sequelize, { Model } from 'sequelize';

export default class Email extends Model {
  static init(sequelize) {
    super.init({
      pessoaid: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
      },
      email: {
        type: Sequelize.STRING,
        defaultValue: '',
        unique: {
          msg: 'BACK - Email já existe',
        },
        validate: {
          isEmail: {
            msg: 'BACK - Email inválido',
          },
        },
      },
      confirmed: {
        type: Sequelize.STRING,
        defaultValue: '0',
      },
    }, {
      sequelize,
      underscored: false,
      tableName: 'emails',
    });

    return this;
  }

    static associate(models) {
    this.belongsTo(models.Pessoa), {
      foreignKey: 'pessoaid',
      as: 'pessoa'
    };
  }

}

