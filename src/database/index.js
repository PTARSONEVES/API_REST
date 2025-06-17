import Sequelize from 'sequelize';
import databaseConfig from '..//config/database';
import Email from '../models/Email';
import Tbscontinente from '../models/Tbscontinente';
import Tbspais from '../models/Tbspais';
import Typemidia from '../models/Typemidia';
import User from '../models/User';
import Userfoto from '../models/Userfoto';
import Usermidia from '../models/Usermidia';
import Usertype from '../models/Usertype';
import Tbsbruf from '../models/Tbsbruf';
import Tbsbrmunicipio from '../models/Tbsbrmunicipio';
import Tbsissitem from '../models/Tbsissitem';
import Tbsisssubitem from '../models/Tbsisssubitem';
import Tbsissdnac from '../models/Tbsissdnac';


const models = [
  Email,
  Tbscontinente,
  Tbspais,
  Tbsbruf,
  Tbsbrmunicipio,
  Tbsissitem,
  Tbsisssubitem,
  Tbsissdnac,
  Typemidia,
  User,
  Userfoto,
  Usermidia,
  Usertype
];

const connection = new Sequelize(databaseConfig);

models.forEach((model) => model.init(connection));
models.forEach((model) => model.associate && model.associate(connection.models));
