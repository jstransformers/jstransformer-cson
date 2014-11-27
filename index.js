'use strict';

var cson = require('cson');

exports.name = 'cson';
exports.outputFormat = 'json';
exports.render = function (str) {
  return JSON.stringify(cson.parseSync(str));
};
