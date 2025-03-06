const mongoose = require('mongoose');
const mongooseDelete = require('mongoose-delete');

const trackSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    artist: {
        type: String,
        required: true
    },
    album: {
        type: String,
        required: true
    },
    genre: {
        type: String,
        required: true
    },
    releaseDate: {
        type: Date,
        required: true
    },
    duration: {
        type: Number,
        required: true
    }
    },

    {
        timestamps: true, 
        versionKey: false
    }
);

trackSchema.plugin(mongooseDelete, {overrideMethods: "all"})
module.exports = mongoose.model("tracks", trackSchema)