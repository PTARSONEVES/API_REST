import Sequelize, { Model } from 'sequelize';

export default class Tblpessoa extends Model {
  static init(sequelize) {
    super.init({
      nomepessoa: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [6, 200],
            msg: 'BACK - Campo senha deve ter entre 6 e 200 caracteres',
          },
        },
      },
      tbspessoatipoid: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      cpfpessoa: {
        type: Sequelize.STRING,
        defaultValue: null,
        validate: {
          len: {
            args: [11],
            msg: 'BACK - Campo cpf deve ter 11 caracteres',
          },
        },
      },
      cnpjpessoa: {
        type: Sequelize.STRING,
        defaultValue: null,
        validate: {
          len: {
            args: [14],
            msg: 'BACK - Campo cpf deve ter 14 caracteres',
          },
        },
      },
      nascpessoa: {
        type: Sequelize.DATE,
        allowNull: true,
      },
    },
    {
      sequelize,
      underscored: false,
      tableName: 'tblpessoas',
    });

    return this;
  }

    static associate(models) {
    this.belongsTo(models.Tbspessoatipo, {
      foreignKey: 'tbspessoatipoid'
    });
    this.hasMany(models.Tblemail), {
      foreignKey: 'tblpessoaid'
    };
    this.hasMany(models.Tblpessoamidia, {
      foreignKey: ['tblpessoaid','tbstypemidiaid'],
      sourceKey: 'id',
    });
    this.hasMany(models.User), {
      foreignKey: 'tblpessoaid'
    };
  }

}

