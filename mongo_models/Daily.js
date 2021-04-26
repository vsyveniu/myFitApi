const mongoose = require('mongoose');

const dailySchema = new mongoose.Schema({
    id: {
        type: Number,
    },
    workouts: [
        {
            title: {
                type: String,
                requiered: true,
                max: 255,
                min: 3,
            },
            icon: {
                type: String,
            },
            onwer: {
                type: String,
                requiered: true,
                max: 255,
                min: 3,
            },
            id: {
                type: Number,
                unique: true,
                requiered: true,
            },
            type: {
                type: String,
                requiered: true,
                max: 1024,
                min: 3,
            },
            set: {
                type: Array,
            },
        },
    ],
});

module.exports = mongoose.model('daily', dailySchema);
