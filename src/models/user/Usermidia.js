import Sequelize, { Model } from 'sequelize';

export default class Usermidia extends Model {

  static init(sequelize) {
    super.init(
      {
        userid: {
          type: Sequelize.INTEGER,
          defaultValue: 1,
        },
        typemidiaid: {
          type: Sequelize.INTEGER,
          defaultValue: 1,
        },
     },
      {
        sequelize,
        underscored: false,
      },
    );



  }

 static associate(models) {
    this.belongsTo(models.User, {
      foreignKey: 'userid',
      as: 'usuario'
    });
    this.belongsTo(models.Tbstypemidia, {
      foreignKey: 'typemidiaid',
      as: 'midia'
    });
  }
}

