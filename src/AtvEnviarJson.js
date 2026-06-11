/*
  * [ATIVIDADE 3 - Enviar JSON]
  *
  * Crie um aplicativo Express com uma única rota do tipo "GET".
  * O endereço desta rota deve ser "/objeto".
  *
  * Ao acessar esta rota, deve ser enviado o conteúdo JSON abaixo:
  *
  * {
  *   acesso: "OK",
  *   titulo: "Responda a pergunta abaixo:",
  *   pergunta: "Quem é mais redondo, o Kirby ou o Jigglypuff?",
  * }
  */

const express = require('express');
const path = require('path');
const cors = require('cors');
const app = express();
const port = 3000
app.use(cors());
app.use(express.static(path.join(__dirname, 'src')));
app.use(express.json());

app.get('/objeto', (req, res) => {
  res.json({
    acesso: "OK",
     titulo: "Responda a pergunta abaixo:",
     pergunta: "Quem é mais redondo, o Kirby ou o Jigglypuff?",
  });
});
app.listen(port, () => {
  console.log(`calabresa${port}`);
});