/*
  * [ATIVIDADE 1 - Enviar HTML]
  *
  * Crie um aplicativo Express com uma única rota do tipo "GET".
  * O endereço desta rota deve ser "/inicio".
  *
  * Ao acessar esta rota, deve ser enviado o conteúdo HTML abaixo:
  *
  *  <html>
  *    <head>
  *      <title>Exemplo de página</title>
  *    </head>
  *    <body>
  *      <h1>Você acessou a página de início!</h1>
  *      <p>Passe um PIX de 1 real como pedágio :D</p>
  *    </body>
  *  </html>
  */
// Importa o Express
const express = require('express');

// Importa algumas funcionalidades que veremos depois
const path = require('path');
const cors = require('cors');

const app = express();

// Permite que o servidor entenda JSON no corpo das requisições
app.use(express.json());
// Habilita CORS (veremos sobre isso depois)
app.use(cors());
app.use(express.static(path.join(__dirname, 'src')));

app.get('/inicio', (req, res) => {
  res.send(`
 <html>
  <head>
    <title>Exemplo de página</title>
    </head>
  <body>
    <h1>Você acessou a página de início!</h1>
    <p>Passe um PIX de 1 real como pedágio :D</p>
    </body>
  </html>
    `);
});
app.listen(3000, () => {
  console.log('Servidor rodando em http://localhost:3000');
});
