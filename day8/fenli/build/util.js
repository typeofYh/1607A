const path = require('path');
const util = {
    geturl(filename) {
        return path.join(__dirname, '..', filename)
    }
};
module.exports = util;