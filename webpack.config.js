'use strict';

let path = require('path');

module.exports = {
  mode: 'development',
  entry: './Food/js/script.js',
  output: {
    filename: 'bundle.js',
    path: __dirname + '/Food/dist/js'
  },
  watch: true,

  devtool: "source-map",

  module: {}
};
