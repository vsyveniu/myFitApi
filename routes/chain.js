const router = require('express').Router();
//const bcrypt = require('bcryptjs');
//const jwt = require('jsonwebtoken');
const verifyToken = require('./verifyToken');
const Chain = require('../mongo_models/Chain');
const Daily = require('../mongo_models/Daily');
const { chainValidation } = require('../validation/chain');

router.get('/:owner', verifyToken, async (req, res) => {
    const chain = await Chain.findOne({ owner: req.params.owner });
    if (!chain) {
        return res.status(404).send(`chain doesn't exist`);
    } else {
        for (const daily of chain.set) {
            let meta = await Daily.findOne({ id: daily.daily_id });
            Object.assign(daily, { meta: { type: meta.type } });
        }

        res.status(200).send(chain.set);
    }
});

router.put('/', verifyToken, async (req, res) => {
    const validation = chainValidation(req.body);

    if (validation.hasOwnProperty('error')) {
        res.status(400).send(validation.error.details[0].message);
    } else {
        const update = await Chain.findOneAndUpdate(
            { owner: req.body.username },
            { set: req.body.set }
        );
        if (update) {
            res.status(200).send('chain created successfully');
        } else {
            res.status(500).send('cannot create chain');
        }
    }
});

module.exports = router;
