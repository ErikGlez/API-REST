'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProjectShema = Schema({
    name:String,
    description:String,
    category:String,
    langs: [String],
    year: Number

});

module.exports = mongoose.model('Project', ProjectShema);
// projects --> guarda los documentos en la coleccion