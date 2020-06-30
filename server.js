// Importando dependencias 
const express = require('express')
const nunjucks = require('nunjucks')
const routes = require('./routes')

const server = express()

// Rotas configuradas no arquivo routes
server.use(routes)

// Habilitar body requisition
server.use(express.urlencoded({ extended: true }))

// Configurando express para usar arquivos estaticos da pasta public
server.use(express.static('public'))

// Configurando express para trabalhar com nunjucks
server.set('view engine', 'njk')

// Configurando nunjucks
nunjucks.configure('views', {
    express: server,
    autoescape: false,
    noCache: true
})

// Abrindo server na porta 5050
server.listen(5050, function () {
    console.log('Server is running...')
})
