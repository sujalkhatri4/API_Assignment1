const express = require('express');
const router = express.Router();
const movieController = require('../controllers/Controller');
const {validateMovie}=require('../middleware/middleware');

//route to import movies
router.post('/import',movieController.importMovies);

//route to get all movies
router.get('/',movieController.getMovies);

//route to get a single movie by id
router.get('/:id',movieController.getMovieById);

//route to update a movie by id
router.put('/update/:id', validateMovie,movieController.updateMovie);

//route top delete a movie by id
router.delete('/delete/:id',movieController.deleteMovie);

//route to create a new movie
//Validate movie before creating
router.post('/create',validateMovie,movieController.createMovie);
module.exports = router;