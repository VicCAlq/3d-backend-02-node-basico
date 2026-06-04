const express = require('express');
const app = express();

// Permite que o servidor entenda JSON no corpo das requisições
app.use(express.json());
// Habilita CORS (veremos sobre isso depois)
app.use(cors());
app.use(express.static(path.join(__dirname, 'src')));

// Envio de HTML escrito direto no código
app.get('/', (req, res) => {
  res.send(`
    <html>
      <head><title>Exemplo de página</title></head>
      <body>
        <h1>Esta é uma página de exemplo</h1>
        <p>Experimente mudar este HTML e enviar</p>
      </body>
    </html>
    `);
});

// Envio de um arquivo html separado
app.get('/index', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Envio de uma resposta em JSON
app.get('/json', (req, res) => {
  res.json({
    titulo: "Olá, "
  });
});

app.listen(3000, () => {
  console.log('Servidor rodando em http://localhost:3000');
});
