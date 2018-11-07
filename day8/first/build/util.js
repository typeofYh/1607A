const path = require('path');
const Util = {
    pathurl(filename) {
        return path.join(__dirname, '..', filename)
    }
};

module.exports = Util;