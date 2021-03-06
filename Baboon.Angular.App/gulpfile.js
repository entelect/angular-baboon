var gulp = require('gulp');
var gutil = require('gulp-util');
var debug = require('gulp-debug');

var requireDir = require('require-dir');
var dir = requireDir('./gulp tasks');

var environment = require('./environment.config.js');

gulp.task('qa', ['clean'], function () {
    environment.target = 'qa';
    environment.debug = false;
    return gulp.start(['release:test'])
        .on('error', gutil.log);
});

gulp.task('dev', ['clean'], function () {
    environment.target = 'dev';
    environment.debug = false;
    return gulp.start(['dev:test'])
        .on('error', gutil.log);
});

gulp.task('live', ['clean'], function () {
    environment.target = 'live';
    environment.debug = false;
    return gulp.start(['release:test'])
        .on('error', gutil.log);
});

gulp.task('styleguide', ['clean:styleguide'], function () {
    environment.target = 'live';
    environment.debug = false;
    return gulp.start(['styleguide:build'])
        .on('error', gutil.log);
});


// default task
gulp.task('default', ['dev'], function () {

});
