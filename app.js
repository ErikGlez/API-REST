'use strict'
//Configuracion de express y body-parser para crear el servidor

var express = require('express');
var bodyParser= require('body-parser');

var app = express();

//cargar archivos de rutas

//middlewares
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//CORS


//rutas
app.get('/', (req, res)=>{
    res.status(200).send(
        "<h2>Pagina de inicio</h2>"
    )
});

app.post('/test/:id', (req, res)=>{
    console.log(req.body.nombre);
    console.log(req.query.web);
    console.log(req.params.id);
   
    res.status(200).send({
        message:"Hola mundo desde mi API de NodeJS"
    })
});

//exportar
module.exports = app;