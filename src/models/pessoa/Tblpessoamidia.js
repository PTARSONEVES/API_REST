import Sequelize, { Model } from 'sequelize';

export default class Tblpessoamidia extends Model {

  static init(sequelize) {
    super.init(
      {
        tblpessoaid: {
          type: Sequelize.INTEGER,
          defaultValue: 1,
        },
        tbstypemidiaid: {
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
    this.belongsTo(models.Tblpessoa, {
      foreignKey: 'tblpessoaid',
    });
    this.belongsTo(models.Tbstypemidia, {
      foreignKey: 'tbstypemidiaid',
    });
  }
}

