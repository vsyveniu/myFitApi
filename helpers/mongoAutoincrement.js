const Counter = require('../mongo_models/Counter');

async function getNextSequence(name) {
    console.log('in auto 1');
    let ret = await Counter.findOneAndUpdate(
        { _id: name },
        { $inc: { seq: 1 } },
        {
            new: true,
        }
    );

    return ret.seq;
}

module.exports = { getNextSequence };
