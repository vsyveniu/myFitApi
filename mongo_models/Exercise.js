const mongoose = require('mongoose');

const exerciseSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
    },
    type: {
        type: String,
    },
    title: {
        type: String,
    },
    structure: {
        type: String,
    },
    description: {
        type: String,
    },
    icon: {
        type: String,
    },
    owner: {
        type: String,
    },

});

module.exports = mongoose.model('exercise', exerciseSchema);
