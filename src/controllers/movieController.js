const asyncHandler = require('express-async-handler');
const path = require('path');

//model
const Movie = require('../database/models/movieModel');

const rootpath = process.cwd();

//@desc GET ALL MOVIES
//@route    GET /SGapi/movies/ || /SGapi/movies
//@access   public
const getAllMovies = asyncHandler(async (req, res)=>{
    const movies = await Movie.find({}, {_id: false}).sort({id: 1});;

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

//@desc GET MOVIE POSTER BY MOVIE ID
//@route    GET /SGapi/movies/:id/posters/ || /SGapi/movies/:id/posters/
//@access   public
const getPosterByMovieId = asyncHandler(async (req, res)=>{
    if(!parseInt(req.params.id)){
        res.status(404);
        throw new Error("Not Found");
    }

    const movie = await Movie.findOne({id: req.params.id}, {_id: false});

    if(!movie){
        res.status(404);
        throw new Error("Not Found");
    }
    res.status(200);
    res.sendFile(path.join(rootpath, 'public', 'assets', 'images' ,'posters', movie.poster));
});

module.exports = {
    getAllMovies,
    getMovieById,
    getPosterByMovieId
};