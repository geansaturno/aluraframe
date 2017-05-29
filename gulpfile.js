var gulp    = require('gulp');
var bs      = require('browser-sync');

gulp.task('server', function(){

    bs.init({
        server: {
            baseDir: "client/"
        }
    });

    gulp.watch('client/**/*', bs.reload);
});
