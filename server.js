import { sources } from 'webpack';
import app from './app';
import cors from 'cors';

require('dotenv').config();

const port = process.env.HTTP_PORT;
const corsOrigin ={
    sources: '/:path*',
    headers: [
      { key: 'Access-Control-Allow-Credentials', value: 'true'},
      { key: 'Access-Control-Allow-Origin', value: '*'},
      { key: 'Access-Control-Allow-Methods', value: 'GET,OPTIONS,PATCH,DELETE,POST,PUT'},
      { key: 'Access-Control-Allow-Headerss', value: 'X-CSRF-Token, X-Requested-With'}
    ],
    origin:'http://localhost:3000',
    credentials:true,
    optionSuccessStatus:200
};

app.use(cors(corsOrigin));//Use this after the variable declaration

app.listen(port, () => {
  console.log();
  console.log(`Escutando na porta ${port}`);
  console.log(`CTRL + Clique em http://localhost:${port}`);
});
