const express = require('express');
const router = express.Router();

const User = require('../models/user.model');

const bcrypt = require('bcrypt');
const saltRounds = 10;

router.post("/auth/signin", (req, res) => {
    const { email, password } = req.body;
    let resUser; 
    User.find({ email: email })
    .then(user => {
      resUser = user; 
      return bcrypt.compare(password, user[0].hash)
    })
    .then(passwordMatched => {
      if(passwordMatched) {
        req.session.user = resUser[0];
        res.status(200).json({
            message: "You are successfully logged in!",
            auth: true
        });
      } else {
        res.status(400).json({
            message: new Error(),
            auth: false,
        })
      }
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

router.post("/auth/signup", (req, res) => {
    const { firstName, lastName, email, password } = req.body;

    bcrypt.hash(password, saltRounds)
    .then(hash =>  {
        let newUser = new User({ firstName, lastName, email, hash });
        newUser.save((err, result) => {
            if (err) {  
                res.status(400).json({
                    message: err,
                    auth: false,
                })
            } else { 
                req.session.user = newUser;
                res.status(200).json({
                    message: "You have successfully signed up!",
                    auth: true
                });
            } 
        })
    });
});

router.get("/auth/hassignedin", (req, res) => {
    if(req.session.user) {
        res.status(200).json({
            message: "You have successfully signed in!",
            auth: true
        });
    } else {
        res.status(200).json({
            message: "You are not logged in.",
            auth: false,
        })
    }
});

router.get("/auth/signout", (req, res) => {
    req.session.destroy();
    res.status(200).json({
        message: "You are now logged out.",
        auth: false,
    })
});

module.exports = router; 