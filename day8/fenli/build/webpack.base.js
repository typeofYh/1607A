const util = require('./util');
const webpack = require('webpack');
const ExtractText = require('extract-text-webpack-plugin');
const HtmlPlugin = require('html-webpack-plugin');
module.exports = {
    entry: {
        app: util.geturl('src/app.js')
    },
    output: {
        filename: '[name].js'
    },
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            use: ['babel-loader']
        }, {
            test: /\.css$/,
            use: ExtractText.extract({
                fallback: 'style-loader',
                use: ['css-loader']
            })
        }]
    },
    plugins: [
        new ExtractText('style.css'),
        new webpack.HotModuleReplacementPlugin(),
        new HtmlPlugin({
            template: util.geturl('index.html')
        })
    ]
}