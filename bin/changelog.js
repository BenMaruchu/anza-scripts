#! /usr/bin/env node

const changelog = require('generate-changelog');
const fs = require('fs');

/**
 * @function
 * @name generateChangelog
 * @description Generate changelog from commit messages
 *
 * @returns {undefined}
 *
 * @version 0.1.0
 * @since 0.1.0
 */
function generateChangelog() {
  return changelog.generate({}).then(function writeFile(changelogs) {
    fs.writeFileSync('./CHANGELOG.md', changelogs);
  });
}

generateChangelog();
