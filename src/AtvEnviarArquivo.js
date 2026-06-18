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
const app = express();
const port = 3000
app.use(cors());
app.use(express.static(path.join(__dirname, 'src')));

// Envio de um arquivo html separado
app.get('/index', (req, res) => {
  res.sendFile(path.join(__dirname, 'src' ,'indexAtividade.html'));
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
