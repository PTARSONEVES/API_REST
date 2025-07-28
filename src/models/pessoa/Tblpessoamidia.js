import Sequelize, { Model } from 'sequelize';

export default class Tblpessoamidia extends Model {

  static init(sequelize) {
    super.init(
      {
        tblpessoaid: {
          type: Sequelize.INTEGER,
          defaultValue: null,
        },
        tbstypemidiaid: {
          type: Sequelize.INTEGER,
          defaultValue: null,
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

