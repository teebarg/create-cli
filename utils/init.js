const welcome = require("./welcome");
const pkg = require("./../package.json");
const handleError = require("./error");

module.exports = ({ clear = true }) => {
    process.on("unhandledRejection", (err) => {
        handleError(`UNHANDLED ERROR`, err);
    });
    welcome({
        title: `n-create-cli`,
        tagLine: `by Adeniyi Aderounmu`,
        description: pkg.description,
        version: pkg.version,
        bgColor: "#6cc24a",
        color: "#000000",
        bold: true,
        clear,
    });
};
