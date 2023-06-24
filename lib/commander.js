const path = require("path");

const { program } = require("commander");
const { input, select, Separator } = require("@inquirer/prompts");

const packageOptions = require("../package.json");
const { createCommandAction } = require("./command-actions");

program.version(packageOptions.version);
program.version(packageOptions.version, "-v, --version");

program.command("create")
.description("make a direction")
.argument("<dir>", "direction name")
.action(createCommandAction)



program.parse(process.argv);