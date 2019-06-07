# Javascript React tooling

## Install as development dependency

```
C:\Users\123456\projects
λ cd myproject
C:\Users\123456\projects\myproject
λ git init
λ yarn add --dev @oakheart/ps-tools-react
```

## Display Help

```
C:\Users\123456\projects\myproject
λ node_modules\.bin\ps-tools-react -h
Usage: ps-tools-react.js <command> [options]

Commands:
  ps-tools-react.js init  Initialise the javascript React tooling

Options:
  --version    Show version number
  -h, --help   Show help
```

## Initialise tooling

```
C:\Users\123456\projects\myproject
λ node_modules\.bin\ps-tools-react init
```

### What it does

This script sets up your project environment with everything required for linting, formatting and testing of your Javascript project (React).

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
