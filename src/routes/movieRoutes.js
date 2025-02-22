const express = require('express');
const router = express.Router();

//controller
const { 
    getAllMovies, 
    getMovieById,
    getPosterByMovieId
} = require('../controllers/movieController');

//getAllMovies
router.get('/', getAllMovies );


//id parameter
router.param('id', (req, res, next, id)=>{
    //console.log(`${id}`);
    next();
});

//getMovieById
router.route('/:id')
    .get( getMovieById );
//getPosterByMovieId
router.route('/:id/posters')
    .get( getPosterByMovieId );

module.exports = router;