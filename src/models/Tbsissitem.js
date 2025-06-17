import Sequelize, {Model} from "sequelize";

export default class Tbsissitem extends Model {
  static init (sequelize) {
    super.init(
      {
        coditem: {
          type: Sequelize.STRING,
          defaultValue: '',
        },
        descritem: {
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
