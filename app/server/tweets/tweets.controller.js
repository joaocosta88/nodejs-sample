var tweetService = require('./tweets.service')

const getAllTweets = (req, res, next) => {
    console.log("finding tweets")
    tweetService.findAll()
    .then(result => {
        console.log(result);
         res.json(result)
    })
    .catch(next);
    console.log("here")
};

const getTweet = (req, res, next) => {
    
};

const createTweet = (req, res, next) => {
    tweetService.create({'tweet' : 'hellllllo'})
    .then(result => {
        console.log("added tweet: "+JSON.stringify(result));
        res.json(result);
    })
    .catch(next);
    console.log("just added a tweet");
};

const updateTweet = (req, res, next) => {

};

const deleteTweet = (req, res, next) => {

};

module.exports = {
    getAllTweets,
    getTweet,
    createTweet,
    updateTweet,
    deleteTweet
}