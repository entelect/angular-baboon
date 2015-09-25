var gulp = require('gulp');
var jshint = require('gulp-jshint');
var gutil = require('gulp-util');
var environment = require('../environment.config.js');

gulp.task('lint', function () {
    return gulp.src([environment.sourceDirectory + '/**/*.js', environment.commonDirectory + '/**/*.js'])
        .pipe(jshint('.jshintrc'))
        .pipe(jshint.reporter('jshint-stylish'))
        .on('error', gutil.log);
});