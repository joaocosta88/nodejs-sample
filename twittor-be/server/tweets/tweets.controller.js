var tweetService = require('./tweets.service'
)
const getAllTweets = (req, res, next) => {
    console.log("finding tweets")
    tweetService.findAllTweets()
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
    tweetService.addTweet();
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