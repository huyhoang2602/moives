const express = require('express');
const movieController =require('../controllers/movieController');
const route = express.Router();

route.get('/api/movies',movieController.movieGetAll);

module.exports = route;