'use strict'

const urldb ='mongodb://localhost:27017/portafolio';
var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect( urldb, { useNewUrlParser: true })
        .then(()=>{
            console.log("Conexión a la base de datos establecida satisfactoriamente.");
        }).catch(err => console.log(err));