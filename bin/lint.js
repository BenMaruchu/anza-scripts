#! /usr/bin/env node

const { CLIEngine } = require('eslint');

const cli = new CLIEngine({
  extensions: ['.js', '.jsx'],
  fix: true,
});

const report = cli.executeOnFiles(['src/', 'test/']);

const formatter = cli.getFormatter();

console.log(formatter(report.results)); // eslint-disable-line
