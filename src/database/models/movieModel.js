const mongoose = require('mongoose');

const Movie = mongoose.Schema(
    {
        id: {
            type: Number,
            required: [true, "The movie's id is mandatory"]
        },
        title: {
            type: String,
            required: [true, "The movie's title is mandatory"],
        }, 
        description: {
            type: String,
            required: [true, "The movie's description is mandatory"],
        }, 
        directors: {
            type: [String],
            required: [true, "The movie's director(s) is mandatory"],
        }, 
        releaseDate: {
            type: Date,
            required: [true, "The movie's release date is mandatory"],
        }, 
        poster: {
            type: String,
            required: [true, "The movie's poster is mandatory"],
        }, 
        characters: {
            type: [String],
            required: [true, "The movie's characters is mandatory"],
        }, 
        writers: {
            type: [String],
            required: [true, "The movie's writers is mandatory"],
        }, 
        topCast: {
            type: [String],
            required: [true, "The movie's top cast is mandatory"],
        }, 
        genres: {
            type: [String],
            required: [true, "The movie's genre(s) is mandatory"],
        },
        rate: {
            type: Number,
            required: [true, "The movie's rate is mandatory"],
            set: number => parseFloat(number.toFixed(1)),
        },
        certificate: {
            type: String,
            required: [true, "The movie's certificate is mandatory"],
        },
        durationInMinutes: {
            type: Number,
            required: [true, "The movie's duration in minutes is mandatory"],
        },
        budget: {
            type: Number,
            required: [true, "The movie's budget is mandatory"],
        },
        grossWorldwide: {
            type: Number,
            required: [true, "The movie's title is mandatory"],
        },
    },
    {
        timestamps: true,
    }
)

module.exports = mongoose.model("Movie", Movie);