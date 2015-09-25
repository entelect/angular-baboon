var gulp = require('gulp');
var karma = require('gulp-karma');
var gutil = require('gulp-util');
var filesize = require('gulp-filesize');
var debug = require('gulp-debug');

var environment = require('../environment.config.js');

gulp.task('dev:test', ['dev:build'], function () {
    return gulp.src([
    ])
        .pipe(karma({
            configFile: 'karma.config.js',
            action: 'run',
            reporters: [
    'dots',
    'coverage'
    ]
        }))
        .on('error', gutil.log);
});

gulp.task('release:test', ['release:build'], function () {
    return gulp.src([
    ])
        .pipe(karma({
            configFile: 'karma.config.js',
            action: 'run',
            browsers: ['Chrome'],
            reporters: [
    'teamcity'
    ]
        }))
        .on('error', gutil.log);
});
