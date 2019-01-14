var knex = require('../../knexfile')

const findAllTweets = () => knex('tweets').select('*');

const addTweet = () => knex('tweets').insert({
    'tweet':'test'
});

module.exports = {
    findAllTweets,
    addTweet
}