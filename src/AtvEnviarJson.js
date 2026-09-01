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

// Importa algumas funcionalidades que veremos depois
const path = require('path');
const cors = require('cors');

const app = express();

// Permite que o servidor entenda JSON no corpo das requisições
app.use(express.json());
// Habilita CORS (veremos sobre isso depois)
app.use(cors());
app.use(express.static(path.join(__dirname, 'src')));

app.get('/objeto', (req, res) => {
  res.json({
    acesso: "OK",
  titulo: "Responda a pergunta abaixo:",
  pergunta: "Quem é mais redondo, o Kirby ou o Jigglypuff?",
  });
});

app.listen(3000, () => {
  console.log('Servidor rodando em http://localhost:3000');
});
