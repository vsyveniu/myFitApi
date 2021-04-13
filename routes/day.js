const router = require('express').Router();
const jwt = require('jsonwebtoken');

const Chain = require('../mongo_models/Chain');
const verifyToken = require('./verifyToken');


router.get('/', verifyToken, async (req, res) => {
    const userExists = await User.findByEmail(req.body.email);
    const userNameExists = await User.findByName(req.body.name);

    if (userExists || userNameExists) {
        return res.status(409).send('Username or email already exists');
    } else {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);

        const user = new User(req.body.name, req.body.email, hashedPassword);

        try {
            await user.save();
        } catch (err) {
            return res.status(500).send('cannot create user').end();
        }

        try {
            const suggestedChain = await Chain.findOne({ owner: 'suggestion'});

            const chain = await Chain.create({ 
                owner: user._name,
                set: suggestedChain.set,
             });
            await chain.save();     
        } catch (err) {
            return res.status(500).send('cannot create user').end();
        }


        const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET);
        res.status(200).header('authtoken', token).send({
            name: user._name,
            email: user.email,
        });
    }
});

module.exports = router;
