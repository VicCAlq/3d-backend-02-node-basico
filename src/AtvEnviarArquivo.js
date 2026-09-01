/*
  * [ATIVIDADE 2 - Enviar arquivo HTML]
  *
  * Crie um aplicativo Express com uma única rota do tipo "GET".
  * O endereço desta rota deve ser "/index".
  *
  * Ao acessar esta rota, deve ser enviado o arquivo 
  * "indexAtividade.js" de dentro da pasta src:
  */
const express = require('express');
const path = require('path');
const cors = require('cors');

const server = express();
const PORT = 3000;

server.use(cors());
server.use(express.static(path.join(__dirname, 'src')));

server.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'src', 'indexAtividade.html'));
});

server.get('/index', (req, res) => {
  res.redirect('/');
});

server.listen(PORT, () => {
  console.log(`🚀 Servidor online em: http://localhost:${PORT}`);
  console.log(`📁 Acesse a página em: http://localhost:${PORT}/`);
});