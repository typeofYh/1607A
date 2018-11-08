const config = {
    dev: {
        mode: 'development',
        port: 8001,
        host: 'localhost',
        devtool: 'cheap-eval-source-map'
    },
    prod: {
        mode: 'production',
        devtool: 'cheap-module-source-map'
    }
};

module.exports = config;