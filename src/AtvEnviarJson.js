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

const express = require('express')
const app = express()

app.use(express.json())

app.get('/objeto', (req, res) => {
  const jason = {
     acesso: "OK",
     titulo: "Responda a pergunta abaixo:",
     pergunta: "Quem é mais redondo, o Kirby ou o Jigglypuff?",
   }
   res.json(jason)
})