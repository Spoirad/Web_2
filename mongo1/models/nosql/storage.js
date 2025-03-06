const mongoose = require('mongoose');

const storageSchema = new mongoose.Schema({
    filename: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    },
},

    {
        timestamps: true,
        versionKey: false
    }
);

module.exports = mongoose.model("storage", storageSchema) 