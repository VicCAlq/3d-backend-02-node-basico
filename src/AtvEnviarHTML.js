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
const express = require('express');
const path = require('path');
const cors = require('cors');

const servidor = express();
const PORTA = 3000;

servidor.get('/home', (req, res) => {
  res.send(`
    <html>
      <head>
        <title>Minha Primeira Página</title>
        <style>
          body { font-family: Arial, sans-serif; text-align: center; margin-top: 50px; }
          h1 { color: #2c3e50; }
          p { color: #34495e; font-size: 18px; }
        </style>
      </head>
      <body>
        <h1>🚀 Bem-vindo à página inicial!</h1>
        <p>Deixe um like e compartilhe com os amigos! 😄</p>
        <p><small>Servidor rodando com sucesso ✅</small></p>
      </body>
    </html>
  `);
});

servidor.get('/inicio', (req, res) => {
  res.redirect('/home');
});

servidor.listen(PORTA, () => {
  console.log(`✅ Servidor ativo em: http://localhost:${PORTA}`);
  console.log(`📌 Acesse: http://localhost:${PORTA}/home`);
});
