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
const express = require('express');
const cors = require('cors');
const path = require('path');

const servidor = express();
const PORTA = 3000;

servidor.use(express.json());
servidor.use(cors());
servidor.use(express.static(path.join(__dirname, 'src')));

servidor.get('/one', (req, res) => {
  res.send(`
    <html>
      <head>
        <title>Ponto de Partida</title>
        <style>
          body { font-family: Arial, sans-serif; text-align: center; margin-top: 50px; background: #f0f0f0; }
          h1 { color: #2c3e50; }
          p { font-size: 18px; color: #34495e; }
        </style>
      </head>
      <body>
        <h1>🚀 A próxima parada é em inglês</h1>
        <p>💡 Dica: Como se chama o número 2 em inglês?</p>
        <p><small>Digite na URL: /[resposta]</small></p>
      </body>
    </html>
  `);
});

servidor.get('/two', (req, res) => {
  res.sendFile(path.join(__dirname, 'src', 'two.html'));
});

servidor.get('/tres', (req, res) => {
  res.json({
    titulo: "Terceira Rota",
    conteudo: "Próximas atividades: vamos explorar outros métodos HTTP!"
  });
});

servidor.get('/dois', (req, res) => {
  res.redirect('/two');
});

servidor.listen(PORTA, () => {
  console.log(`✅ Servidor rodando em: http://localhost:${PORTA}`);
  console.log(`📌 Rotas disponíveis:`);
  console.log(`   - http://localhost:${PORTA}/one`);
  console.log(`   - http://localhost:${PORTA}/two`);
  console.log(`   - http://localhost:${PORTA}/tres`);
});

