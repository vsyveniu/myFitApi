const Counter = require('../mongo_models/Counter');

function getNextSequence(name) {
    let ret = Counter.findAndModify({
        query: { _id: name },
        update: { $inc: { seq: 1 } },
        new: true,
    });

    return ret.seq;
}

export default { getNextSequence };
