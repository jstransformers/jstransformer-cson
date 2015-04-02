'use strict';

var assert = require('assert');

var transform = require('../');

var res = transform.render('{'               +
                         '\n    # an array'  +
                         '\n    abc: ['      +
                         "\n        'a'"     +
                         "\n        'b'"     +
                         "\n        'c'"     +
                         '\n    ]'           +
                         '\n    # an object' +
                         '\n    a:'          +
                         "\n        b: 'c'"  +
                         '\n}');
assert.deepEqual(JSON.parse(res), {"abc":["a","b","c"],"a":{"b":"c"}});
console.log('test passed');
