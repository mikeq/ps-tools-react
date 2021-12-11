# Javascript React tooling

## Which Version?

If using Node < 15 then use `@2.0.0`, if using Node >= 15 then use >= `@3.0.0`

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

Once you have initialised you should run `yarn` again to install the Husky pre-commit hooks.

### What it does

This script sets up your project environment with everything required for formatting of your Javascript project (React).

It will install these npm packages

- prettier
- eslint-config-prettier
- eslint-plugin-prettier
- husky
- lint-staged

Using Create React App to initialise your project will automatically install the following:

- eslint
- @testing-library/react

The following resource files are created in the root of your project `.eslintrc.json` and `.prettierrc`, these define the rules for linting and formatting.

The following are added to your package.json file

```
...
  "scripts": {
    "prettier": "prettier --write *.{js,jsx,json,css,md}",
    "lint": "eslint --color .",
    "prepare": "husky install"
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
  },
  "husky": {
    "hooks": {
      "pre-commit": "lint-staged"
    }
  }
...
```

### What it doesn't do

This script will not configure your editor plugins.
