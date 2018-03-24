const path = require('path');

module.exports = {
    context: __dirname,
    devServer: {
        contentBase: __dirname
    },
    entry: './main.js',
    output: {
        filename: '[name].entry.js'
    },
    resolve: {
        alias: {
            'react-ids-validator': path.join(__dirname, '../src')
        }
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader"
            }
        }]
    }
}