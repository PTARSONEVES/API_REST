import Sequelize, { Model } from 'sequelize';

export default class Usermidia extends Model {

  static init(sequelize) {
    super.init(
      {
        chave: {
          type: Sequelize.STRING,
          defaultValue: 'teste',
        },
      },
      {
        hooks: {
          // eslint-disable-next-line no-unused-vars
          beforeCreate: (usermidia, options) => {
            usermidia.chave = 'teste';
          },
        },
        sequelize,
        underscored: false,
      },
    );

/*
    this.addHook('beforeSave', usermidia => {
      if(usermidia.typemidiaid && usermidia.userid) {
        usermidia.chave = usermidia.typemidiaid.toString() + usermidia.userid.toString();
      }

      usermidia.chave = 'teste';
      console.log('aqui');
    });

    return this;
*/
  }

  /*
 static associate(models) {
    this.hasMany(models.Typemidia, { foreignKey: 'usermidiaid' });
    this.belongsTo(models.User, { foreignKey: 'usermidiaid' });
  }
 */
}

