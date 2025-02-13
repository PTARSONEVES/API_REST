import dotenv from 'dotenv';
import { resolve } from 'path';

dotenv.config();

import './src/database';

import express from 'express'
import cors from 'cors';
import helmet from 'helmet';

import homeRoutes from './src/routes/homeRoutes';
import userRoutes from './src/routes/userRoutes';
import tokenRoutes from './src/routes/tokenRoutes';
import usertypeRoutes from './src/routes/usertypeRoutes';
import tbscontineteRoutes from './src/routes/tbscontineteRoutes';
import tbspaisRoutes from './src/routes/tbspaisRoutes';
import userfotoRoutes from './src/routes/userfotoRoutes';

const whiteList = [
  'http://localhost:3000',
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
    this.app.use('/users/', userRoutes);
    this.app.use('/tokens/', tokenRoutes);
    this.app.use('/usertypes/', usertypeRoutes);
    this.app.use('/continentes/', tbscontineteRoutes);
    this.app.use('/paises/', tbspaisRoutes);
    this.app.use('/fotos/', userfotoRoutes);
  }
}

export default new App().app;
