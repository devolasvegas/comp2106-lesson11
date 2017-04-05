/**
 * Created by devon on 2017-02-08.
 */

// create a game model with mongoose to do CRUD operations
let mongoose = require('mongoose');

let gameSchema = new mongoose.Schema({
    title: {
        type: String,
        required: 'Title is required'
    },
    developer: {
        type: String,
        required: 'Publisher is required'
    },
    genre: {
        type: String
    },
    year: {
        type: Number,
        required: 'Year is required',
        min: 1970
    }
});

// make this model public
module.exports = mongoose.model('Game', gameSchema);