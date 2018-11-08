const config = require('../config/index');
const baseConfig = require('./webpack.base');
const Merge = require('webpack-merge');
module.exports = Merge({
    mode: config.prod.mode,
    devtool: config.prod.devtool
}, baseConfig);