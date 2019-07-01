#! /usr/bin/env node

const path = require('path');
const { CLIEngine } = require('eslint');

const cli = new CLIEngine({
  baseConfig: {
    extends: [
      'airbnb',
      'plugin:import/recommended',
      'plugin:react/recommended',
      'plugin:jsdoc/recommended',
      'plugin:jest/recommended',
      'plugin:jest/style',
      'plugin:prettier/react',
      'plugin:prettier/recommended',
      'prettier',
    ],
    rules: {
      'prettier/prettier': 'error',
      'import/no-extraneous-dependencies': [
        'error',
        {
          devDependencies: ['**/*.test.js', '**/*.spec.js', '**/stories/*'],
        },
      ],
      'react/destructuring-assignment': [
        'error',
        'always',
        {
          ignoreClassFields: true,
        },
      ],
      'react/jsx-filename-extension': [
        1,
        {
          extensions: ['.js', 'jsx'],
        },
      ],
      'max-len': ['error', 80],
      'react/jsx-wrap-multilines': 2,
    },
  },
  plugins: ['import', 'jest', 'jsdoc', 'prettier', 'react'],
  resolvePluginsRelativeTo: path.join(__dirname, '..', 'node_modules'),
  extensions: ['.js', '.jsx'],
  fix: true,
});

const report = cli.executeOnFiles(['src/', 'test/']);

const formatter = cli.getFormatter();

console.log(formatter(report.results)); // eslint-disable-line
