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
/*
        hooks: {
          beforeSave: () => {
            Usermidia.chave = 'teste';
          },
        },
*/
        sequelize,
        underscored: false,
      },
    );


    this.addHook('beforeSave', async usermidia => {
/*
      if(usermidia.typemidiaid && usermidia.userid) {
        usermidia.chave = usermidia.typemidiaid.toString() + usermidia.userid.toString();
      }

      usermidia.chave = 'teste';
      console.log('aqui');
*/
      usermidia.chave = 'teste';
      await Usermidia.create({
        chave: "teste",
      });
    });

    return this;

  }

  /*
 static associate(models) {
    this.hasMany(models.Typemidia, { foreignKey: 'usermidiaid' });
    this.belongsTo(models.User, { foreignKey: 'usermidiaid' });
  }
 */
}

