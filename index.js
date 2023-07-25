// $ npm install --save express --save
// $ npm install --save nodemon -g
// $ npm install --save sequelize mysql2
// $ npm install --save express-handlebars
// $ npm install --save body-parser

const express = require("express")
const app = express()
const handlebars = require('express-handlebars')
const bodyParser = require('body-parser')
const Cliente = require('./models/Cliente')

// Config
    // Template Engine
    app.engine('handlebars', handlebars.engine({defaultLayout: 'main'}))
    app.set('view engine','handlebars')
    // Body Parser
    app.use(bodyParser.urlencoded({extended:false}))
    app.use(bodyParser.json())



// ROTAS

app.get("/", function(req, res){
    Cliente.findAll().then(function(clientes){
    res.render('home', {clientes:clientes})        
    })
  
})


app.get("/avaliar/:token", function(req, res){
    res.send("Avaliar "+req.params.token);
})

app.get("/formulario", function(req, res){
    res.render('formulario');
})

app.post("/add", function(req, res){
    Cliente.create({
        nome: req.body.titulo,
        endereco: req.body.conteudo
    }).then(function(){
        res.send("ok")
    }).catch(function(){
        res.send("OFF")
    })
})

// STARTANDO SERVIDOR

app.listen(8081);