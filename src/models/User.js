import Sequelize, { Model } from 'sequelize';
import bcryptjs from 'bcryptjs';


export default class User extends Model {
  static init(sequelize) {
    super.init(
      {
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
              msg: 'BACK - Campo senha deve ter entre 6 e 50 caracteres',
            },
          },
        },
      },
      {
        sequelize,
        underscored: false,
      }
    );

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
    this.hasMany(models.Tblemail, { foreignKey: 'userid'});
    this.hasMany(models.Usermidia, { foreignKey: 'userid' });
    this.belongsTo(models.Usertype, { foreignKey: 'usertypeid'});
    this.belongsTo(models.Tblpessoa, { foreignKey: 'pessoaid' });
  }

}

