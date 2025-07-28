import dotenv from 'dotenv';
dotenv.config();
import { resolve } from 'path';

import './src/database';

import express from 'express'
import cors from 'cors';
import helmet from 'helmet';
import consign from 'consign';

// Routes

// Token
import tokenRoutes from './src/routes/tokenRoutes';

// Home
import homeRoutes from './src/routes/homeRoutes';

// Pessoa
import tblpessoaRoutes from './src/routes/pessoa/tblpessoaRoutes';
import tbspessoatipoRoutes from './src/routes/pessoa/tbspessoatipoRoutes';

// User
import userRoutes from './src/routes/user/userRoutes';
import usertypeRoutes from './src/routes/user/usertypeRoutes';
import userfotoRoutes from './src/routes/user/userfotoRoutes';

// Localização
import tbscontinenteRoutes from './src/routes/localizacao/tbscontinenteRoutes';
import tbsbrufRoutes from './src/routes/localizacao/tbsbrufRoutes';
import tbspaisRoutes from './src/routes/localizacao/tbspaisRoutes';
import tbsbrmunicipioRoutes from './src/routes/localizacao/tbsbrmunicipioRoutes';

// ISSQN
import tbsissitemRoutes from './src/routes/issqn/tbsissitemRoutes';
import tbsisssubitemRoutes from './src/routes/issqn/tbsisssubitemRoutes';
import tbsissdnacRoutes from './src/routes/issqn/tbsissdnacRoutes';

// CNAE
import tbscnaeRoutes from './src/routes/cnae/tbscnaeRoutes';
import tbssecaocnaeRoutes from './src/routes/cnae/tbssecaocnaeRoutes';
import tbsdivisaocnaeRoutes from './src/routes/cnae/tbsdivisaocnaeRoutes';
import tbsgrupocnaeRoutes from './src/routes/cnae/tbsgrupocnaeRoutes';
import tbsclassecnaeRoutes from './src/routes/cnae/tbsclassecnaeRoutes';
import tbssubclassecnaeRoutes from './src/routes/cnae/tbssubclassecnaeRoutes';

// Ancorar

import tbsflatRoutes from './src/routes/flats/tbsflatRoutes';

const whiteList = [
  'http://localhost:3000',
  'http://localhost:5173',
  'http://172.16.16.60:5173',
  'http://172.16.16.60:3000'
];

const corsOptions = {
  origin: function (origin, callback) {
    if(whiteList.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  }
};

//const rotas = consign().include('./src/routes');

//console.log(rotas._files);

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(cors(corsOptions));
    this.app.use(helmet());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
    // eslint-disable-next-line no-undef
    this.app.use(express.static(resolve(__dirname, 'uploads')));
  }

  routes() {
    this.app.use('/', homeRoutes);
    this.app.use('/pessoas/', tblpessoaRoutes);
    this.app.use('/pessoatipo/', tbspessoatipoRoutes);
    this.app.use('/users/', userRoutes);
    this.app.use('/tokens/', tokenRoutes);
    this.app.use('/usertypes/', usertypeRoutes);
    this.app.use('/continentes/', tbscontinenteRoutes);
    this.app.use('/ufs/', tbsbrufRoutes);
    this.app.use('/iss/', tbsissitemRoutes);
    this.app.use('/iss/subitem/', tbsisssubitemRoutes);
    this.app.use('/iss/subitem/dnac/', tbsissdnacRoutes);
    this.app.use('/cnae/', tbscnaeRoutes);
    this.app.use('/cnae/secao/', tbssecaocnaeRoutes);
    this.app.use('/cnae/divisao/', tbsdivisaocnaeRoutes);
    this.app.use('/cnae/grupo/', tbsgrupocnaeRoutes);
    this.app.use('/cnae/c/classe/', tbsclassecnaeRoutes);
    this.app.use('/cnae/subclasse/', tbssubclassecnaeRoutes);
    this.app.use('/paises/', tbspaisRoutes);
    this.app.use('/fotos/', userfotoRoutes);
    this.app.use('/municipios/', tbsbrmunicipioRoutes);
    this.app.use('/tbsflats/', tbsflatRoutes);
  }
}

export default new App().app;
