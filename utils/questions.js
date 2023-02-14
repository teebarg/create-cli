const prompt = require("./prompt");

module.exports = async () => {
    const name = await prompt({
        name: `name`,
        message: `CLI name?`,
        hint: `(kebab-case only)`,
    });
    const command = await prompt({
        name: `command`,
        message: `CLI command?`,
        hint: `(optional: if different from CLI name)`,
    });
    const description = await prompt({
        name: `description`,
        message: `CLI description?`,
    });
    const version = await prompt({
        name: `version`,
        message: `CLI version?`,
        initial: `0.0.1`,
    });
    const license = await prompt({
        name: `license`,
        message: `CLI license?`,
        initial: `UNLICENSED`,
    });
    const authorName = await prompt({
        name: `authorName`,
        message: `CLI author name?`,
    });
    const authorEmail = await prompt({
        name: `authorEmail`,
        message: `CLI author email?`,
    });
    const authorUrl = await prompt({
        name: `authorUrl`,
        message: `CLI author URL?`,
    });

    const vars = {
        name,
        command: command ? command : name,
        description,
        version,
        license,
        authorName,
        authorEmail,
        authorUrl,
    };

    return vars;
};
