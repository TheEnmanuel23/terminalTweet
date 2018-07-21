require('dotenv').config();

const inquirer = require('inquirer');
const ora = require('ora');
const emojic = require("emojic");

const questions = require('./questions');
const sendTweet = require('./twitter');

// config spinner
const spinner = ora('Posting your tweet...');
spinner.color = 'yellow';

(async () => {
  require('./init')();

  try {
    let response = await inquirer.prompt(questions);

    spinner.start();
    await sendTweet(response.tweet);
    spinner.stop();

    console.log(`${emojic.whiteCheckMark}  Your tweet has been published`);
  } catch (err) {
    spinner.stop();
    console.log(`${emojic.fearful}  err`);
  }
})();