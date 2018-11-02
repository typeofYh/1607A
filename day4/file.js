const fs = require('fs');
const path = require('path');
// let res = fs.readFileSync();

function readFiles(url) {
    return new Promise((resolve, reject) => {
        fs.readFile(url, (error, data) => {
            if (error) {
                reject(error);
                return;
            }
            resolve(data);
        })
    })
}

let readFileAll = async function() {
    let file1 = await readFiles(path.join(__dirname, './', 'async.html'));
    let file2 = await readFiles(path.join(__dirname, './', 'aa.txt'));
    console.log(file1.toString() + file2.toString());
}
readFileAll();