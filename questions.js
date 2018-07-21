const emojic = require("emojic");

const askTweet = {
  name: "tweet",
  type: "input",
  message: emojic.bird + "  What's happening?",
  validate: function (value) {
    if (!value || value.length === 0) {
      return "Please enter your tweet and press enter"
    }

    if (value.length > 280) {
      return "Your tweet must have 280 characters maximum"
    }

    return true;
  }
}

module.exports = [
  askTweet
];