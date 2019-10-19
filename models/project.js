'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProjectShema = Schema({
    name:String,
    description:String,
    category:String,
    year: Number,
    langs: String,
    image: String

});

module.exports = mongoose.model('Project', ProjectShema);
// projects --> guarda los documentos en la coleccion