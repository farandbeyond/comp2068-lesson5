var mongoose = require('mongoose');

//define the class
var gameSchema = new mongoose.schema({
    title:{
        type: String,
        required: 'No Title Entered'
    },
    publisher: {
        type: String,
    },
    genre: {
        type: String,
        required: 'No genre entered'
    },
    year: {
        type: Number,
        required: 'no year entered'
    }
})

module.exports = mongoose.model('Game', gameSchema);