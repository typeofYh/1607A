const gulp = require('gulp');
const server = require('gulp-webserver');
const path = require('path');
const url = require('url');
const fs = require('fs');
const bodyParser = require('body-parser');
const getfile = require('./getfile');
/**
 * [字符串插入新内容]
 *
 * @param   {[type]}  oldstring  [oldstring 原字符串]
 * @param   {[type]}  index      [index 要插入的下标]
 * @param   {[type]}  content    [content 要插入的内容]
 *
 * @return  {[type]}  修改之后的字符串
 */
function inset(oldstring, index, content) {
    let temp = [];
    temp.push(oldstring.slice(0, index));
    temp.push(content);
    temp.push(oldstring.slice(index));
    return temp.join('');
};
gulp.task('server', () => {
    gulp.src('.')
        .pipe(server({
            port: 8081,
            middleware: [bodyParser.urlencoded({ extended: false }), (req, res) => {
                if (req.url === '/favicon.ico') {
                    res.end('');
                    return;
                }
                let pathname = url.parse(req.url).pathname;
                if (/^\/api/.test(pathname)) {
                    if (pathname === '/api/file') {
                        if (req.body) {
                            async function writefile() {
                                let template = await getfile(path.join(__dirname, 'tempalte.html'));
                                let index = template.indexOf('</head>');
                                return inset(template, index, `<style>${req.body.css}</style><script>${req.body.js}</script>`);
                            }
                            writefile().then(text => {
                                fs.writeFileSync(path.join(__dirname, 'newfile', 'index' + Date.now() + '.html'), text);
                                res.end(JSON.stringify({ code: 0 }));
                            });
                        }
                    }
                } else {
                    getfile(path.join(__dirname, pathname)).then(data => {
                        res.end(data);
                    }).catch(er => {
                        res.end(er);
                    })
                }
            }]
        }))
})