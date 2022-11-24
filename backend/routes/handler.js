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
router.get('/tweets', async (req, res) => {
    const tweets = Schemas.Tweets;
    const userTweets = await tweets.find({}).populate("user").exec((err, tweetData) => {
        if (err) throw err;
        if (tweetData) {
            res.end(JSON.stringify(tweetData));
        } else {
            res.end();
        }
    });
});

router.post('/addTweet', async (req, res) => { // using a form to post to database
    const userTweet = req.body.tweetInput;
    const user = Schemas.Users;
    const userId = await user.findOne({username:'herman'}).exec();

    const newTweet = new Schemas.Tweets({
        tweet: userTweet,
        user: userId._id
    });

    try {
        await newTweet.save( (err, newTweetResults) => {
            if (err) res.end('Error Saving.');
            res.redirect('/tweets');
            res.end();
        });
    } catch(err) {
        console.log(err);
        res.redirect('/tweets');
        res.end();
    }
});

module.exports = router;