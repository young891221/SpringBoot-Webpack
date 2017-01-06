/**
 * Created by KimYJ on 2016-12-05.
 */
const path = require('path');
const webpack = require('webpack');

//var __dirname = './src/main/resources/static';
module.exports = {
    entry: path.join(__dirname + '/src/main/resources/static/entry/entry.js'),
    output: {
        path: path.join(__dirname, '/src/main/resources/static'),
        filename: 'bundle.js'
    },
    module: {
        preLoaders: [
            {
                test: /\.js$/,
                loader: 'eslint',
                exclude: /(node_modules|bower_components)/
            }
        ],
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel',
                exclude: /(node_modules|bower_components)/,
                query: {
                    presets: ['es2015']
                }
            }
        ]
    },
    plugins: [
        //new webpack.optimize.OccurenceOrderPlugin(),
        //new webpack.HotModuleReplacementPlugin(),
        //new webpack.NoErrorsPlugin()
    ]
}