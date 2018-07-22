require('dotenv').config();

const inquirer = require('inquirer');
const ora = require('ora');
const emojic = require("emojic");

const questions = require('./src/questions');
const sendTweet = require('./src/twitter');

// config spinner
const spinner = ora('Posting your tweet...');
spinner.color = 'yellow';

const log = console.log;

(async () => {
  require('./src/init')();

  try {
    let response = await inquirer.prompt(questions);

    spinner.start();
    await sendTweet(response.tweet);
    spinner.stop();

    log(`${emojic.whiteCheckMark}  Your tweet has been published`);
  } catch (err) {
    spinner.stop();
    log(`${emojic.fearful}  ${err}`);
  }
})();