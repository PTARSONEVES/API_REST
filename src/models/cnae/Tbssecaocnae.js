import Sequelize, {Model} from "sequelize";

export default class Tbssecaocnae extends Model {
  static init (sequelize) {
    super.init(
      {
        codsecao: {
          type: Sequelize.STRING,
          defaultValue: '',
          validate: {
            len: {
              args: [2],
              msg: 'BACK - Campo deve ter 2 caracteres',
            },
          },
        },
        descrsecao: {
          type: Sequelize.TEXT,
          defaultValue: '',
        },
      },
      {
        sequelize,
      }
    );
  }
}
