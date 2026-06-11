/*
  * [ATIVIDADE 4 - Três Rotas Diferentes]
  *
  * Crie um aplicativo Express com três rotas do tipo "GET".
  * 
  * A primeira rota deve ser acessada em "/uno" e deve retornar
  * o conteúdo HTML abaixo:
  *
  *  <html>
  *    <head>
  *      <title>Tudo começa aqui</title>
  *    </head>
  *    <body>
  *      <h1>A próxima rota é em Inglês</h1>
  *      <p>Para acessar ela, como se chama o número 2 em inglês?</p>
  *    </body>
  *  </html>
  *
  * A segunda roda deve ser acessada em "/two", e deve retornar
  * o arquivo HTML "two.html"
  *
  * A terceira rota deve ser acessada em "/san", e deve retornar
  * o conteúdo JSON abaixo:
  *
  * {
  *   titulo: "San",
  *   conteudo: "Próximas atividades a gente elabora os outros métodos HTML"
  * }
  */

const express = require("express");
const path = require("path");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, 'src')));

app.get('/uno', (req, res) => {
  res.send(`
    <html>
      <head>
        <title>Tudo começa aqui</title>
      </head>
      <body>
        <h1>A próxima rota é em Inglês</h1>
        <p>Para acessar ela, como se chama o número 2 em inglês?</p>
      </body>
    </html>
    `);
});

app.get('/two', (req, res) => {
  res.sendFile(path.join(__dirname, 'two.html'));
});

app.get('/san', (req, res) => {
  res.json({
    titulo: "San",
    conteudo: "Próximas atividades a gente elabora os outros métodos HTML"
  });
});

app.listen(3000, () => {
console.log("Você está na porta 3000");
});
