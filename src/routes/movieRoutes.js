const express = require('express');
const router = express.Router();

//controller
const { 
    getAllMovies, 
    getMovieById,
    getPosterByName
} = require('../controllers/movieController');

//getAllMovies
router.get('/', getAllMovies );

//getPosterOfMovie
router.param('postername', (req, res, next, postername)=>{
    //console.log(`${postername}`);
    next();
});

router.route('/posters/:postername')
    .get( getPosterByName );

//getMovieById
router.param('id', (req, res, next, id)=>{
    //console.log(`${id}`);
    next();
});

router.route('/:id')
    .get( getMovieById );


module.exports = router;