/**
 * Created by KimYJ on 2016-12-05.
 */
const path = require('path');
const webpack = require('webpack');

module.exports = {
    devtool: 'inline-source-map',
    devServer: {
        historyApiFallback: true,
        progress: true, //progress bar show
        compress: true, //enable gzip compress(압축)
        publicPath: '/',
        host: "0.0.0.0",
        port: 3000,
        proxy: {
            "**": "http://localhost:8080"
        }
    },
    plugins: [
        new webpack.NamedModulesPlugin() //prints more readable module names in the browser console on HMR updates
    ]
}
