const router = require('express').Router();
const jwt = require('jsonwebtoken');

const Day = require('../mongo_models/Daily');
const Exercise = require('../mongo_models/Exercise');
const verifyToken = require('./verifyToken');
const { getNextSequence } = require('../helpers/mongoAutoincrement');

router.get('/:id', verifyToken, async (req, res) => {
    try {
        const day = await Day.findOne({
            id: req.params.id,
        });
        for(const item of day.workouts ){
            for(const exercise of item.set){
                const meta = await Exercise.findOne({id: exercise.exercise_id})
                exercise.meta = meta;
            }
        }
        if(day){
            return res.status(200).send(day);
        }
    } catch (err) {
        return res.status(404).send('cannot find day');
    }
});

router.post('/', verifyToken, async (req, res) => {
    try {
        const newday = await Day.create({
            id: await getNextSequence('daily_id'),
            workouts: [],
        });
        await newday.save();
        return res.status(200).send({ id: newday.id });
    } catch (err) {
        return res.status(500).send('cannot create day');
    }
});

module.exports = router;
