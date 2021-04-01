const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const { User } = require('../models/User');

const registerValidate = require('../middlewares/registerValidation');
const loginValidate = require('../middlewares/loginValidation');

router.post('/register', registerValidate, async (req, res) => {
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

        const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET);
        res.status(200).header('authtoken', token).send({
            name: user.name,
            email: user.email,
        });
    }
});

router.post('/login', loginValidate, async (req, res) => {
    const user = await User.findByEmail(req.body.email);
    console.log(req);
    if (!user) {
        return res.status(404).send(`user doesn't exist`);
    } else {
        const isPasswordOk = await bcrypt.compare(
            req.body.password,
            user.password
        );

        if (!isPasswordOk) {
            return res.status(400).send('Password is incorrect');
        }
        const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET);
        res.status(200).header('authtoken', token).send({
            name: user.name,
            email: user.email,
        });
    }
});

module.exports = router;
