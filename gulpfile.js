// jshint esversion:6

let g               = require('gulp');
let browserSync     = require('browser-sync');
let gplugins        = require('gulp-load-plugins')();

g.task('server', () => {

    browserSync.init({
        server: {
            baseDir: "src/client/"
        }
    });

    g.watch('client/**/*', browserSync.reload);
});

g.task('server-build', () => {

    browserSync.init({
        server: {
            baseDir: "client/"
        }
    });

    g.watch('client/**/*', browserSync.reload);
});

g.task('clean', () => {
    return g
        .src('client/')
        .pipe(gplugins.clean());
});

g.task('copy', ['clean'], () => {
    return g
        .src('src/client/**/*')
        .pipe(g.dest('client/'));
});

g.task('babel', ['copy'], () => {
    return g.src('client/js/app/**/*.js')
        .pipe(gplugins.babel({presets : ['es2015'] }))
        .pipe(g.dest('client/js/app/'));
});

g.task('usemin', ['babel'], () => {

    g.src('client/**/*.html')
        .pipe(gplugins.usemin({
            js      : [gplugins.uglify],
            css     : [gplugins.cssmin],
            html    : [gplugins.htmlmin({collapseWhitespace: true})]
        }))
        .pipe(g.dest('client/'));
});
