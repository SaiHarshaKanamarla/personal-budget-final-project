const jwt = require('jsonwebtoken');
const config = require('config');
const bcrypt = require('bcrypt');
const  User  = require('../models/userModel');
const express = require('express');
const router = express.Router();
const accessTokenKey = 'My super secret key';
const refreshKey = "Refresh token key"
const jwt_decode = require('jwt-decode');
const exjwt = require('express-jwt');

const jwtMW = exjwt({
    secret: accessTokenKey,
    algorithms: ['HS256']
});
router.post('/', async (req, res) => {    
 
    //  Now find the user by their email address
    let user = await User.findOne({ username: req.body.username });
    if (!user) {
        return res.status(206).send('Incorrect username or password.');
    }
 
    // Then validate the Credentials in MongoDB match
    // those provided in the request
    const validPassword = await bcrypt.compare(req.body.password, user.password);
    if (!validPassword) {
        return res.status(204).send('Incorrect email or password.');
    }
    const token = jwt.sign({ _id: user._id }, accessTokenKey,{expiresIn:'60s'});
    const refreshToken = jwt.sign({ _id: user._id }, refreshKey,{expiresIn:'180s'});
    loginStatus = true;
    var decoded_token = jwt_decode(token);
    res.status(200).json({
        success: true,
        err:null,
        exp:decoded_token.exp,
        token,
        refreshToken,
        loginStatus
    })
});

 
module.exports = router; 