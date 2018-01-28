# jstransformer-cson

[CSON](https://github.com/bevry/cson) support for [JSTransformers](http://github.com/jstransformers).

[![Build Status](https://img.shields.io/travis/jstransformers/jstransformer-cson/master.svg)](https://travis-ci.org/jstransformers/jstransformer-cson)
[![Coverage Status](https://img.shields.io/codecov/c/github/jstransformers/jstransformer-cson/master.svg)](https://codecov.io/gh/jstransformers/jstransformer-cson)
[![Dependency Status](https://img.shields.io/david/jstransformers/jstransformer-cson/master.svg)](http://david-dm.org/jstransformers/jstransformer-cson)
[![Greenkeeper badge](https://badges.greenkeeper.io/jstransformers/jstransformer-cson.svg)](https://greenkeeper.io/)
[![NPM version](https://img.shields.io/npm/v/jstransformer-cson.svg)](https://www.npmjs.org/package/jstransformer-cson)

## Installation

    npm install jstransformer-cson

## API

```js
var cson = require('jstransformer')(require('jstransformer-cson'))

cson.render("name: 'someone'").body
//=> '{"name": "someone"}'
```

## License

  MIT
