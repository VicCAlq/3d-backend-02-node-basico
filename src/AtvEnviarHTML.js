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

const express = require('express')
const app = express()
const port = 3000


app.listen(port, () => {
    console.log('Me chama na porta ${port}')
})

const { append } = require("express/lib/response");

append.get('inicio', (req, res) => {
  res.send(
     <html>
     <head>
       <title>Exemplo de página</title>
     </head>
     <body>
       <h1>Você acessou a página de início!</h1>
       <p>Passe um PIX de 1 real como pedágio :D</p>
     </body>
    </html>
  
  )
})

