const router = require('express').Router();
const User = require('../model/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const { registerValidation } = require('../validation/register');
const { loginValidation } = require('../validation/login');


router.post('/register', async (req, res) => {

    const validation = registerValidation(req.body);

    if(validation.hasOwnProperty('error')){
        res.status(400).send(validation.error.details[0].message);
    }
    else{

        /* const emailExist = await User.findOne({ email: req.body.email });
        if(emailExist){
            return res.status(400).send('Email already exists');
        } */

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);

        const user = new User({
            name: req.body.name,
            email: req.body.email,
            password: hashedPassword,
        });

        console.log(hashedPassword);

        try{
            const savedUser = await user.save();
            res.status(200).send('User created succesfully');
        } catch(err) {
            res.status(400).send(` Damn error has occured: ${err}`);
        }
    } 
});

router.post('/login', async (req, res) => {

    const validation = loginValidation(req.body);

    if(validation.hasOwnProperty('error')){
        res.status(400).send(validation.error.details[0].message);
    }
    else{

        const user = await User.findOne({ email: req.body.email });
        if(!user){
            return res.status(400).send('Email is not exist');
        }

        const isPasswordOk = await bcrypt.compare(req.body.password, user.password)

        if(!isPasswordOk){
            return res.status(400).send('Password is incorrect');
        }

        const token = jwt.sign({_id: user._id}, process.env.TOKEN_SECRET);
        res.header('auth-token', token).send(token);

    }

});


module.exports = router;