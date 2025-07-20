import Sequelize, { Model } from 'sequelize';

export default class Tblemail extends Model {
  static init(sequelize) {
    super.init({
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
      tablename: 'tblemails',
      underscored: false,
    });

    return this;
  }

    static associate(models) {
    this.belongsTo(models.Tblpessoa), {
      foreignKey: 'pessoaid',
      as: 'pessoa'
    };
  }

}

