const gulp = require('gulp');
const webserver = require('gulp-webserver');
const Mock = require('mockjs');

gulp.task('page', () => {
    return gulp.src('.')
        .pipe(webserver({
            port: 8081,
            fallback: 'swiper.html'
        }))
});

gulp.task('data', () => {
    return gulp.src('.')
        .pipe(webserver({
            port: 8082,
            middleware(req, res) {
                if (req.url === '/favicon.ico') {
                    res.end('');
                    return;
                };
                res.writeHead(200, {
                    'Access-Control-Allow-Origin': '*'
                });
                res.end(JSON.stringify(Mock.mock({
                    "images|4": [{
                        url: '@image',
                        title: '@ctitle'
                    }]
                })));
            }
        }))
})

gulp.task('default', gulp.parallel('page', 'data'))