import Sequelize from 'sequelize';
import databaseConfig from '..//config/database';

//Models
import Tbstypemidia from '../models/Tbstypemidia';
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
import Tbspessoatipo from '../models/pessoa/Tbspessoatipo';
import Tblpessoa from '../models/pessoa/Tblpessoa';
import Tblemail from '../models/pessoa/Tblemail';
//user
import User from '../models/user/User';
import Userfoto from '../models/user/Userfoto';
import Usermidia from '../models/user/Usermidia';
import Usertype from '../models/user/Usertype';


const models = [
  Tbspessoatipo,
  Tblpessoa,
  Tblemail,
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
  Tbstypemidia,
  User,
  Userfoto,
  Usermidia,
  Usertype
];

const connection = new Sequelize(databaseConfig);

models.forEach((model) => model.init(connection));
models.forEach((model) => model.associate && model.associate(connection.models));
