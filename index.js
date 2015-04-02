'use strict';

var CSON = require('cson-parser');

exports.name = 'cson';
exports.outputFormat = 'json';
exports.render = function (str) {
  return JSON.stringify(CSON.parse(str));
};
