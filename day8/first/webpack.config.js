const Util = require('./build/util.js');
const webpack = require('webpack');
const HtmlPlugin = require('html-webpack-plugin');
const ExtractText = require('extract-text-webpack-plugin');
module.exports = {
    entry: {
        main: Util.pathurl('src/main.js')
    },
    output: {
        path: Util.pathurl('dist/'),
        filename: '[name].js'
    },
    devServer: {
        port: 9090,
        hot: true
    },
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            use: [{
                loader: "babel-loader",
                options: {
                    "presets": ["env"]
                }
            }],
            exclude: [Util.pathurl('node_modules')]
        }, {
            test: /\.css$/,
            //use: ['style-loader', 'css-loader']
            use: ExtractText.extract({
                fallback: 'style-loader',
                use: ["css-loader"]
            })
        }, {
            test: /\.(jpg|png|gif|svg)$/,
            use: [{
                loader: 'url-loader',
                options: {
                    limit: 100
                }
            }]
        }]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlPlugin({
            template: "./index.html",
            inject: 'head'
        }),
        new ExtractText('style.css')
    ]
};