const jwt = require('jsonwebtoken');
const config = require('config');
const bcrypt = require('bcrypt');
const  User  = require('../models/userModel');
const express = require('express');
const router = express.Router();
 
router.post('/', async (req, res) => {    
 
    //  Now find the user by their email address
    let user = await User.findOne({ username: req.body.username });
    if (!user) {
        return res.status(400).send('Incorrect username or password.');
    }
 
    // Then validate the Credentials in MongoDB match
    // those provided in the request
    const validPassword = await bcrypt.compare(req.body.password, user.password);
    if (!validPassword) {
        return res.status(400).send('Incorrect email or password.');
    }
    const token = jwt.sign({ _id: user._id }, config.get('PrivateKey'));
    res.send(token);
});

 
module.exports = router; 