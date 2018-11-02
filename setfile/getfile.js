const fs = require('fs');

module.exports = function(pathname) {
    return new Promise((resolve, reject) => {
        fs.readFile(pathname, (error, data) => {
            if (error) {
                reject(error);
                return;
            }
            resolve(data.toString());
        })
    })
}