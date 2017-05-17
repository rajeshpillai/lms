var webpack = require("webpack");
var path = require("path");

var BUILD_DIR = path.resolve(__dirname, 'public');
var APP_DIR = path.resolve(__dirname, 'app');

var config = {
    entry: APP_DIR + '/index.js',
    output: {
        path: BUILD_DIR,
        filename: 'bundle.js',
        sourceMapFilename: "bundle.map"
    },
    devtool: '#source-map',
    module: {
        loaders: [
            {test: /\.jsx?/, include: APP_DIR, loader: 'babel-loader'}
        ]
    },
    plugins: [],
    devServer: {
        contentBase: BUILD_DIR,
        port:3000
    },
};

module.exports = config;