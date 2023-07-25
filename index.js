// $ npm install express --save
// $ npm install nodemon -g

const express = require("express");
const app = express();

app.get("/", function(req, res){
    res.send("Painel Principal");
})

app.get("/avaliar/:token", function(req, res){
    res.send("Avaliar "+req.params.token);
})

app.listen(8081, function(){
    console.log("Servidor Online");
});