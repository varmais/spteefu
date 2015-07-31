var gulp = require('gulp');
var sourceMaps = require('gulp-sourcemaps');
var babelify = require('babelify');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var connect = require('gulp-connect');

var jsSrc = 'src/**/*.js';
var cssSrc = 'src/**/*.scss';

gulp.task('connect', function() {
    connect.server();
});

gulp.task('js', function () {

    var b = browserify({
        entries: 'src/js/app.js',
        transform: [babelify],
        debug: true
    });

    return b.bundle()
        .pipe(source('app.js'))
        .pipe(buffer())
        .pipe(sourceMaps.init())
        .pipe(sourceMaps.write('.'))
        .pipe(gulp.dest('dist/js'));
});

gulp.task('css', function () {
    gulp.src(cssSrc)
        .pipe(sourceMaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(concat('styles.css'))
        .pipe(sourceMaps.write('.'))
        .pipe(gulp.dest('dist/css'));
});

gulp.task('watch', function () {
    gulp.watch(jsSrc, ['js']);
    gulp.watch(cssSrc, ['css']);
});

gulp.task('default', ['js', 'css', 'watch', 'connect']);