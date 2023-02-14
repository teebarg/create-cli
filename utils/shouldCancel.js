const chalk = require("chalk");
const yellow = chalk.bold.yellow;

module.exports = async (action) => {
    if (action === undefined) {
        console.log(yellow(`❯ Cancelled!\n`));
        process.exit(0);
    }
};
