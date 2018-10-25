# Javascript tooling

## Install as development dependency

```
C:\Users\1352145\projects
λ cd myproject
C:\Users\1352145\projects\myproject
λ git init
λ yarn add --dev oakheart/tools
```

## Display Help

```
C:\Users\1352145\projects\myproject
λ node_modules\.bin\ps-tools -h
Usage: ps-tools.js <command> [options]

Commands:
  ps-tools.js init  Initialise the javascript tooling

Options:
  --version    Show version number
  -h, --help   Show help
```

## Initialise tooling

```
C:\Users\1352145\projects\myproject
λ node_modules\.bin\ps-tools init
```

### What it does

This script sets up your project environment with everything required for linting, formatting and testing of your Javascript project (NodeJS or React).

It will install these npm packages

- eslint
- prettier
- jest
- enzyme
- eslint-config-prettier
- eslint-plugin-prettier
- eslint-plugin-react
- husky
- lint-staged

The following resource files are created in the root of your project `.eslintrc.json` and `.prettierrc`, these define the rules for linting and formatting.

The following are added to your package.json file

```
...
  "scripts": {
    "precommit": "lint-staged",
    "eslint_check": "eslint --print-config .eslintrc.json | eslint-config-prettier-check",
    "prettier": "prettier --write *.{js,jsx,json,css,md}",
    "lint": "eslint --color .",
    "test": "jest"
    ...
  }
...
```

and

```
...
  "lint-staged": {
    "*.{js,jsx,json,css,md}": [
      "prettier --write",
      "git add"
    ]
  }
...
```

### What it doesn't do

This script will not configure your editor plugins.
