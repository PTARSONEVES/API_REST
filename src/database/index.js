import Sequelize from 'sequelize';
import databaseConfig from '..//config/database';

//Models
// cnae
import Tbssecaocnae from '../models/cnae/Tbssecaocnae';
import Tbsdivisaocnae from '../models/cnae/Tbsdivisaocnae';
import Tbsgrupocnae from '../models/cnae/Tbsgrupocnae';
import Tbsclassecnae from '../models/cnae/Tbsclassecnae';
import Tbssubclassecnae from '../models/cnae/Tbssubclassecnae';
import Tbscnae from '../models/cnae/Tbscnae';
//flats
import Tbstipoflat from '../models/flats/Tbstipoflat';
import Tbsflat from '../models/flats/Tbsflat';
//issqn
import Tbsissitem from '../models/issqn/Tbsissitem';
import Tbsisssubitem from '../models/issqn/Tbsisssubitem';
import Tbsissdnac from '../models/issqn/Tbsissdnac';
//localizacao
import Tbscontinente from '../models/localizacao/Tbscontinente';
import Tbspais from '../models/localizacao/Tbspais';
import Tbsbruf from '../models/localizacao/Tbsbruf';
import Tbsbrmunicipio from '../models/localizacao/Tbsbrmunicipio';
//pessoa
import Pessoatpo from '../models/pessoa/Pessoatpo';
import Pessoa from '../models/pessoa/Pessoa';
import Foto from '../models/pessoa/Foto';
import Email from '../models/pessoa/Email'
import Midia from '../models/pessoa/Midia';
import Midiatpo from '../models/pessoa/Midiatpo';
//user
import User from '../models/user/User';
import Usertype from '../models/user/Usertype';


const models = [
  Midiatpo,
  Pessoatpo,
  Pessoa,
  Foto,
  Email,
  Midia,
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
  Tbstipoflat,
  Tbsflat,
  Tbsisssubitem,
  Tbsissdnac,
  User,
  Usertype
];

const connection = new Sequelize(databaseConfig);

models.forEach((model) => model.init(connection));
models.forEach((model) => model.associate && model.associate(connection.models));
