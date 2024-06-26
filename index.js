const express = require('express');
const app = express();

app.use(express.static('public'))

app.get("/", function(req,res){
    res.sendFile(__dirname +'/view/index.html');
})

app.get('/sobre/:nome',function(req,res){
    res.send('esse e o sobre '+ req.params.nome);
})

app.get('/blog',function(req,res){
    res.send('esse e meu blog!')
    })

app.get('/ola/:cargo/:nome',function(req, res){
    res.send('<h1>ola '+req.params.nome+'</h1>'+'<h2>o seu cargo e '+req.params.cargo+'</h2')
})
app.listen(8081, function(){
    console.log('servidor rodando na porta 8081');
}); //sempre tem que ser a ultima linha do codigonode