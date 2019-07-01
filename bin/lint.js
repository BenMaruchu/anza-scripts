#! /usr/bin/env node

const path = require('path');
const { CLIEngine } = require('eslint');

const cli = new CLIEngine({
  configFile: path.join(__dirname, '..', 'configs', 'eslint.json'),
  resolvePluginsRelativeTo: path.join(__dirname, '..', 'node_modules'),
  extensions: ['.js'],
  fix: true,
});

const report = cli.executeOnFiles(['src/', 'test/']);

const formatter = cli.getFormatter();

console.log(formatter(report.results)); // eslint-disable-line
