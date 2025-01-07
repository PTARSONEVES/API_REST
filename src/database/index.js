import Sequelize from 'sequelize';
import databaseConfig from '..//config/database';
import User from '../models/User';
import Usertype from '../models/Usertype';
import Tbscontinente from '../models/Tbscontinente';
import Tbspais from '../models/Tbspais';

const models = [
  User,
  Usertype,
  Tbscontinente,
  Tbspais,
];

const connection = new Sequelize(databaseConfig);

models.forEach((model) => model.init(connection));
