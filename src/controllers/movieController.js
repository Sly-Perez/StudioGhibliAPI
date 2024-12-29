const asyncHandler = require('express-async-handler');
const path = require('path');

//model
const Movie = require('../database/models/movieModel');

const rootpath = process.cwd();

//@desc GET ALL MOVIES
//@route    GET /SGapi/movies/ || /SGapi/movies
//@access   public
const getAllMovies = asyncHandler(async (req, res)=>{
    const movies = await Movie.find({}, {_id: false});

    res.status(200).json(movies);
});

//@desc GET MOVIE BY ID
//@route    GET /SGapi/movies/:id/ || /SGapi/movies/:id
//@access   public
const getMovieById = asyncHandler(async (req, res)=>{
    if(!parseInt(req.params.id)){
        res.status(404);
        throw new Error("Not Found");
    }

    const movie = await Movie.findOne({id: req.params.id}, {_id: false});

    if(!movie){
        res.status(404);
        throw new Error("Not Found");
    }
    res.status(200).json(movie);
});

//@desc GET MOVIE POSTER BY NAME
//@route    GET /SGapi/movies/posters/:postername/ || /SGapi/movies/posters/:postername
//@access   public
const getPosterByName = asyncHandler(async (req, res)=>{
    res.status(200);
    res.sendFile(path.join(rootpath, 'public', 'assets', 'images' ,'posters', req.params.postername));
});

module.exports = {
    getAllMovies,
    getMovieById,
    getPosterByName
};