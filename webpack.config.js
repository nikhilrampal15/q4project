var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname);
var APP_DIR = path.resolve(__dirname);

var config = {
    entry: APP_DIR + '/react-components/app.js',
    output: {
        path: BUILD_DIR,
        filename: 'src/main/resources/public/static/bundle.js'
    },
    module : {
        loaders : [
            {
                test : /\.jsx?/,
                include : APP_DIR,
                loader : 'babel'
            },
            {
                test: /\.css$/,
                loader: 'style!css?modules'
            }
        ]
    }
};


module.exports = config;