#! /usr/bin/env node
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
import chalk from 'chalk';

yargs(hideBin(process.argv))
  .usage('Usage: $0 <command> [options]')
  .command('init', 'Initialise the javascript tooling', async () => {
    console.log(chalk.blue('Setting up the javascript tools'));
    await import('./scripts.js');
    await import('./prettier_resource.js');
    await import('./linter.js');
    console.log(chalk.blue('Install complete'));
    console.log(
      chalk.blue('Run `yarn` again to install Husky pre-commit hooks'),
    );
  })
  .demand(1, 'must provide a valid command')
  .help('h')
  .alias('h', 'help').argv;
