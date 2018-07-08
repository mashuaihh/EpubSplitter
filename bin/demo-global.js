#!/usr/bin/env node

var myLibrary = require('../lib/index.js');

// Delete the 0 and 1 argument (node and script.js)
var args = process.argv.splice(process.execArgv.length + 2);

// Retrieve the first argument
var epub = args[0];

myLibrary.askPrompt(epub);