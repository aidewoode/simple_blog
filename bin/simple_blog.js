#!/usr/bin/env node

var program = require('commander');

program
  .version(require('../package').version)
  .usage('<command>')
  .command('create', 'create blog project')
  .command('add', 'add an article')
  .command('build', 'run build')
  .command('server', 'run a local server for the blog')
  .parse(process.argv);
