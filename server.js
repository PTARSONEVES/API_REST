import app from './app';

require('dotenv').config();

const port = process.env.HTTP_PORT;

app.listen(port, () => {
  console.log();
  console.log(`Escutando na porta ${port}`);
  console.log(`CTRL + Clique em http://localhost:${port}`);
});
