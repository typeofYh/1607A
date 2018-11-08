const util = require('./util');
const config = require('../config/index');
const Merge = require('webpack-merge');
const baseConfig = require('./webpack.base');
const devConfig = {
    mode: config.dev.mode,
    devServer: {
        port: config.dev.port,
        host: config.dev.host,
        hot: true
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
            'script': util.geturl('src/js')
        }
    },
    devtool: config.dev.devtool
};

module.exports = Merge(devConfig, baseConfig);