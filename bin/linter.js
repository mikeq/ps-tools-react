#! /usr/bin/env node
const fs = require('fs');
const chalk = require('chalk');

console.log(chalk.yellow('Creating ESLint rc file...'));
const { eslint } = require('../template/eslintrc');
fs.writeFileSync('.eslintrc.json', JSON.stringify(eslint, null, 2));
console.log(chalk.green('ESLint rc file created.'));
