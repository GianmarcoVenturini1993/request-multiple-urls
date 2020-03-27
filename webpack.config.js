const path = require('path');
const config = require('./package.json');

const webpack = require('webpack');

module.exports = {
    entry: path.resolve(__dirname, config.main),
    devtool: 'source-map',
    output: {
        library: 'request-multiple-urls',
        libraryTarget: 'umd',
        path: __dirname,
        filename: 'build/request-multiple-urls.js' // check for prod env later
    },
    module: {
        loaders: [
          {test: /\.es6?$/, exclude: /node_modules/, loader: 'babel-loader'}
        ]
    },
    plugins: []
};