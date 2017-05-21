var webpack = require("webpack");
var path = require("path");
var nodeExternals = require('webpack-node-externals');

var BUILD_DIR = path.resolve(__dirname, 'public');
var APP_DIR = path.resolve(__dirname, 'app');

var config = {
    entry: [
        // 'webpack-dev-server/client?http://localhost:9000', // enables websocket connection
        // 'webpack/hot/dev-server', // to perform HMR in the browser
        APP_DIR + '/index.js',
        
    ],
    output: {
        path: BUILD_DIR + '/static',
        pathinfo:true,
        filename: 'bundle.js',
        sourceMapFilename: "bundle.map",
        publicPath:  BUILD_DIR
    },
    devtool: '#source-map',
    module: {
        loaders: [
            {
                test: /\.jsx?/, 
                include: APP_DIR, 
                loader: 'babel-loader',
                exclude: /node_modules/,
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin({
            multistep: true
        })
    ],
    devServer: {
        contentBase: BUILD_DIR,
        hot: true,
        port:3000
    },
};

module.exports = config;