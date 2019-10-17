'use strict'

const urldb ='mongodb://localhost:27017/portafolio';
var mongoose = require('mongoose');
var app = require('./app');
var port = 3700;

mongoose.Promise = global.Promise;
mongoose.connect( urldb, { useNewUrlParser: true })
        .then(()=>{
            console.log("Conexión a la base de datos establecida satisfactoriamente.");

            //Creacion del servidor
            app.listen(port, ()=>{
                console.log("Servidor corriendo correctamente en la url: localhost:3700");
            });
        }).catch(err => console.log(err));