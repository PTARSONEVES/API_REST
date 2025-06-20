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
import Tbssecaocnae from '../models/cnae/Tbssecaocnae';
import Tbsdivisaocnae from '../models/cnae/Tbsdivisaocnae';
import Tbsgrupocnae from '../models/cnae/Tbsgrupocnae';
import Tbsclassecnae from '../models/cnae/Tbsclassecnae';
import Tbssubclassecnae from '../models/cnae/Tbssubclassecnae';
import Tbscnae from '../models/cnae/Tbscnae';


const models = [
  Email,
  Tbscontinente,
  Tbspais,
  Tbsbruf,
  Tbsbrmunicipio,
  Tbscnae,
  Tbssecaocnae,
  Tbsdivisaocnae,
  Tbsgrupocnae,
  Tbsclassecnae,
  Tbssubclassecnae,
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
