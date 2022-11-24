const express = require('express');
const router = express.Router();
const Schemas = require('../models/Schemas');
/*
router.get('/addUser', async (req, res) => { // how to add a user through code
    const user = {username:"karla",fullname: 'Karla Mans'};
    const newUser = new Schemas.Users(user); // new user inserted as 'user' variable

    try {
        await newUser.save(async(err,newUserResult) =>{
            console.log('New user created!');
            res.end('New user created!');
        });
    }catch(err){
        console.log(err);
        res.end('User not added!');
    }
});
*/
router.get('/height', async (req, res) => {
    const growth = Schemas.height;
    const userGrowth = await height.find({}).populate("user").exec((err, user_heightData) => {
        if (err) throw err;
        if (user_height) {
            res.end(JSON.stringify(user_height));
        } else {
            res.end();
        }
    });
});

router.post('/addHeight', async (req, res) => { // using a form to post to database
    const nameEntry = req.body.nameInput;
    const heightEntry = req.body.heightInput;
    const user = Schemas.Users;
    const userId = await user.findOne({username:'herman'}).exec();

    const newHeight = new Schemas.Height({
        user_height: heightEntry,
        user: userId._id
    });

    try {
        await newHeight.save( (err, newHeightResults) => {
            if (err) res.end('Error Saving.');
            res.redirect('/height');
            res.end();
        });
    } catch(err) {
        console.log(err);
        res.redirect('/height');
        res.end();
    }
});

module.exports = router;