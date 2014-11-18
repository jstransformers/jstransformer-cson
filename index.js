'use strict';

var cson = require('cson');

exports.outputFormat = 'json';
exports.compile = function (str) {
  return JSON.stringify(cson.parseSync(str));
};
