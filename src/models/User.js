import Sequelize, { Model } from 'sequelize';
import bcryptjs from 'bcryptjs';


export default class User extends Model {
  static init(sequelize) {
    super.init({
      name: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 255],
            msg: '(BACK) Campo nome deve ter entre 3 e 255 caracteres',
          },
        },
      },
      lastname: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 255],
            msg: '(BACK) Campo sobrenome deve ter entre 3 e 255 caracteres',
          },
        },
      },
      alias: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 15],
            msg: '(BACK) Campo codinome deve ter entre 3 e 15 caracteres',
          },
        },
      },
      email: {
        type: Sequelize.STRING,
        defaultValue: '',
        unique: {
          msg: '(BACK) Email já existe',
        },
        validate: {
          isEmail: {
            msg: '(BACK) Email inválido',
          },
        },
      },
      password_hash: {
        type: Sequelize.STRING,
        defaultValue: '',
      },
      password: {
        type: Sequelize.VIRTUAL,
        defaultValue: '',
        validate: {
          len: {
            args: [6, 50],
            msg: '(BACK) Campo senha deve ter entre 6 e 50 caracteres',
          },
        },
      },
    }, {
      sequelize,
      underscored: false,
    });

    this.addHook('beforeSave', async user => {
      if(user.password) {
        user.password_hash = await bcryptjs.hash(user.password, 8);
      }
    });

    return this;
  }

  passwordIsValid(password) {
    return bcryptjs.compare(password, this.password_hash);
  }

    static associate(models) {
    this.hasMany(models.Userfoto, { foreignKey: 'userid'});
    this.belongsTo(models.Usertype), { foreignKey: 'usertypeid'};
  }

}

