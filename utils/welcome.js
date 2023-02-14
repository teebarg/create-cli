const chalk = require("chalk");
const dim = chalk.dim;

module.exports = (options = {}) => {
    const defaultOptions = {
        title: "ADD A HEADING",
        tagLine: "",
        description: "",
        bgColor: "#ffffff",
        color: "#000000",
        bold: true,
        clear: true,
        version: "",
    };
    const opts = { ...defaultOptions, ...options };
    const { title, tagLine, description, bgColor, color, bold, clear, version } = opts;

    const bg = bold ? chalk.hex(bgColor).inverse.bold : chalk.hex(bgColor).inverse;
    const clr = bold ? chalk.hex(color).bold : chalk.hex(color);
    clear && process.stdout.write(process.platform === 'win32' ? '\x1B[2J\x1B[0f' : '\x1B[2J\x1B[3J\x1B[H');

    console.log();
    console.log(`${clr(`${bg(` ${title} `)}`)} v${version} ${dim(tagLine)}\n${dim(description)}`);
    console.log();
};
