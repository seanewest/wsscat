#!/usr/bin/env node

var minimist = require('minimist');

var cli_opts = {};
cli_opts.alias = {listen: 'l', connect: 'c'};
var args = minimist(process.argv, cli_opts);

var wsscat = require('./');
wsscat(args);
