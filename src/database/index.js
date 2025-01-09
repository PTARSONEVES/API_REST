import Sequelize from 'sequelize';
import databaseConfig from '..//config/database';
import User from '../models/User';
import Usertype from '../models/Usertype';
import Tbscontinente from '../models/Tbscontinente';
import Tbspais from '../models/Tbspais';
import Userfoto from '../models/Userfoto';

const models = [
  User,
  Usertype,
  Tbscontinente,
  Tbspais,
  Userfoto
];

const connection = new Sequelize(databaseConfig);

models.forEach((model) => model.init(connection));
models.forEach((model) => model.associate && model.associate(connection.models));
