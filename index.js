require('dotenv').config();
const Twitter = require('twitter');

const client = new Twitter({
  consumer_key: process.env.CONSTUMER_KEY,
  consumer_secret: process.env.CONSTUMER_SECRET,
  access_token_key: process.env.ACCESS_TOKEN,
  access_token_secret: process.env.ACCESS_TOKEN_SECRET
});

client.post('statuses/update', { status: 'Custom tweet from terminal with nodejs' })
  .then(function (tweet) {
    console.log(tweet);
  })
  .catch(function (error) {
    throw error;
  });