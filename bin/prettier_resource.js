#! /usr/bin/env node
const fs = require('fs');
const chalk = require('chalk');

console.log(chalk.yellow('Creating Prettier rc file...'));
const { prettier } = require('../template/prettierrc');
fs.writeFileSync('.prettierrc', JSON.stringify(prettier, null, 2));
console.log(chalk.green('Prettier rc file created.'));
