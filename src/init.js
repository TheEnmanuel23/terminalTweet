const fliguet = require('figlet');
const chalk = require('chalk');

module.exports = () => {
  require('clear')();

  console.log(
    chalk.blue(
      fliguet.textSync('Hello Twitter', { horizontalLayout: 'full' })
    )
  );
}