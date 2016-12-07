/**
 * Created by KimYJ on 2016-12-05.
 */
var __dirname = './src/main/resources/static';
module.exports = {
    entry: __dirname + '/entry/entry.js',
    output: {
        path: __dirname,
        filename: 'bundle.js'
    },
    module: {
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
    }
};