'use strict'

var Project = require('../models/project');

var controller = {
    home: function(req, res){
        return res.status(200).send({
            message: 'Soy la home'
        });
    },

    test: function(req, res){
        return res.status(200).send({
            message: 'Soy el test'
        });
    },

    saveProject: function(req, res){
        var project = new Project();

        var params = req.body;
        project.name = params.name;
        project.description = params.description;
        project.category = params.category;
        project.year = params.year;
        project.langs = params.langs;
        project.image = null;

        project.save((err, projectStore)=>{
            if(err) return res.status(500).send({message: 'Error al guardar el documento.'});
            
            if(!projectStore) return res.status(404).send({message: 'No se ha podido guardar el proyecto.'});

            return res.status(200).send({project: projectStore});

        });
        
    },

    getProject: function(req, res){
        var projectId = req.params.id;

        if(projectId == null) return res.status(404).send({message: 'El proyecto no existe.'});

        Project.findById(projectId, (err, project)=>{

            if(err) return res.status(500).send({message: 'Error al devolver los datos.'});

            if(!project) return res.status(404).send({message: 'El proyecto no existe.'});

            return res.status(200).send({
                project
            });
        });
    },

    getProjects: function(req, res){
        //year: año
        Project.find({}).sort('-year').exec((err, projects)=>{
            
            if(err) return res.status(500).send({message: 'Error al devolver los datos.'});

            if(!projects) return res.status(404).send({ message: 'No hay proyectos que mostrar.'});

            return res.status(200).send({projects});

        });
    },

    updateProject: function(req, res){
        var projectId = req.params.id;
        var update = req.body;

        Project.findByIdAndUpdate(projectId, update, {new:true},(err, projectUpdated)=>{

            if(err) return res.status(500).send({message: 'Error al actualizar'});

            if(!projectUpdated) return res.status(404).send({message: 'No existe el proyecto'});

            return res.status(200).send({
                project: projectUpdated
            })
        });
    },

    deleteProject: function(req, res){
        var projectId = req.params.id;

        Project.findByIdAndRemove(projectId, (err, projectDeleted)=>{

            if(err) return res.status(500).send({message: 'No se ha podido borrar el proyecto'});

            if(!projectDeleted) return res.status(404).send({message: 'No se puede eliminar el proyecto'});

            return res.status(200).send({
                project: projectDeleted
            })
        })
    }


};

module.exports = controller;