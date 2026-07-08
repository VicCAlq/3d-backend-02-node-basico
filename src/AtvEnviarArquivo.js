/*
  * [ATIVIDADE 2 - Enviar arquivo HTML]
  *
  * Crie um aplicativo Express com uma única rota do tipo "GET".
  * O endereço desta rota deve ser "/index".
  *
  * Ao acessar esta rota, deve ser enviado o arquivo 
  * "indexAtividade.js" de dentro da pasta src:
  *//*
  * [ATIVIDADE 2 - Enviar arquivo HTML]
  *
  * Crie um aplicativo Express com uma única rota do tipo "GET".
  * O endereço desta rota deve ser "/index".
  *
  * Ao acessar esta rota, deve ser enviado o arquivo 
  * "indexAtividade.js" de dentro da pasta src:
  */

const express = require('express')
const app = express()
const port = 3000
const path = require('path');
const cors = require('cors');
app.use(cors());
app.use(express.static(path.join(__dirname, 'src')));

app.get("/index",(req,res) =>{
  res.sendFile(path.join(__dirname, 'indexAtividade.html'));
})

app.listen(port, () => {
    console.log('Servidor rodando! Acesse http://localhost:3000');
});
/*
  * [ATIVIDADE 2 - Enviar arquivo HTML]
  *
  * Crie um aplicativo Express com uma única rota do tipo "GET".
  * O endereço desta rota deve ser "/index".
  *
  * Ao acessar esta rota, deve ser enviado o arquivo 
  * "indexAtividade.js" de dentro da pasta src:
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

app.get('/index', (req, res) => {
  res.sendFile(path.join(__dirname, 'indexAtividade.html'));
});

app.listen(3000, () => {
  console.log('Servidor rodando em http://localhost:3000');
});/*
  * [ATIVIDADE 2 - Enviar arquivo HTML]
  *
  * Crie um aplicativo Express com uma única rota do tipo "GET".
  * O endereço desta rota deve ser "/index".
  *
  * Ao acessar esta rota, deve ser enviado o arquivo 
  * "indexAtividade.js" de dentro da pasta src:
  */
/*
  * [ATIVIDADE 2 - Enviar arquivo HTML]
  *
  * Crie um aplicativo Express com uma única rota do tipo "GET".
  * O endereço desta rota deve ser "/index".
  *
  * Ao acessar esta rota, deve ser enviado o arquivo 
  * "indexAtividade.js" de dentro da pasta src:
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

app.get('/index', (req, res) => {
  res.sendFile(path.join(__dirname, 'indexAtividade.html'));
});

app.listen(3000, () => {
  console.log('Servidor rodando em http://localhost:3000');
});
