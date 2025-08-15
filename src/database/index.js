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
// flats
import Flat from '../models/flats/Flat';
import Flattpo from '../models/flats/Flattpo';
import Flatloc from '../models/flats/Flatloc';
// issqn
import Tbsissitem from '../models/issqn/Tbsissitem';
import Tbsisssubitem from '../models/issqn/Tbsisssubitem';
import Tbsissdnac from '../models/issqn/Tbsissdnac';
// localizacao
import Continente from '../models/localizacao/Continente';
import Pais from '../models/localizacao/Pais';
import Regiao from '../models/localizacao/Regiao';
import Uf from '../models/localizacao/Uf';
import Municipio from '../models/localizacao/Municipio';
// pessoa
import Pessoatpo from '../models/pessoa/Pessoatpo';
import Pessoa from '../models/pessoa/Pessoa';
import Foto from '../models/pessoa/Foto';
import Email from '../models/pessoa/Email'
import Midia from '../models/pessoa/Midia';
import Midiatpo from '../models/pessoa/Midiatpo';
// reservas
import Reserva from '../models/reservas/Reserva';
import Hospede from '../models/reservas/Hospede';
import Sitreserva from '../models/reservas/Sitreserva';
// user
import User from '../models/user/User';
import Usertype from '../models/user/Usertype';


const models = [
  Tbscnae,
  Tbssecaocnae,
  Tbsdivisaocnae,
  Tbsgrupocnae,
  Tbsclassecnae,
  Tbssubclassecnae,
  Flat,
  Flattpo,
  Flatloc,
  Tbsissitem,
  Tbsisssubitem,
  Tbsissdnac,
  Continente,
  Pais,
  Regiao,
  Uf,
  Municipio,
  Midiatpo,
  Pessoatpo,
  Pessoa,
  Foto,
  Email,
  Midia,
  Reserva,
  Hospede,
  Sitreserva,
  User,
  Usertype
];

const connection = new Sequelize(databaseConfig);

models.forEach((model) => model.init(connection));
models.forEach((model) => model.associate && model.associate(connection.models));
