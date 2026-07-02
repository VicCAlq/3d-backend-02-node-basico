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
const express = require("express");
const app = express();
app.get("/objeto", (req, res) => {
  res.json({
    acesso: "OK",
    titulo: "Responda a pergunta abaixo:",
    pergunta: "Quem é mais redondo, o Kirby ou o Jigglypuff?"
  });
});
app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});
