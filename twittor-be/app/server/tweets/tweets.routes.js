const router = require('express').Router();
const {
    getAllTweets,
    getTweet,
    createTweet,
    updateTweet,
    deleteTweet
} = require('./tweets.controller')

router.route("/tweets")
    .get(getAllTweets)
    .post(createTweet);

router.route("/tweets/add")
    .get(createTweet)

router.route("/tweets/:tweet_id")
    .get(getTweet)
    .put(updateTweet)
    .delete(deleteTweet)

module.exports = router;