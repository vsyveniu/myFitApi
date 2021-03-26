const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const verifyToken = require("./verifyToken");

router.get('/:id', verifyToken, async (req, res) => {
   
});

module.exports = router;
