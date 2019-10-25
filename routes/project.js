'use strict'

var express = require('express');
var ProjectController = require('../controllers/project');

var router = express.Router();

//middleware
var multipart = require('connect-multiparty');
var multipartMiddleware =  multipart({ uploadDir: './uploads'});

router.get('/home', ProjectController.home);
router.post('/test', ProjectController.test);
router.post('/save-project', ProjectController.saveProject);
router.get('/project/:id?', ProjectController.getProject);
router.get('/projects', ProjectController.getProjects);
router.put('/project-update/:id',ProjectController.updateProject);
router.delete('/project-delete/:id',ProjectController.deleteProject);
router.post('/upload-image/:id', multipartMiddleware,  ProjectController.uploadImage);
router.get('/get-image/:image', ProjectController.getImageFile);

module.exports = router;
