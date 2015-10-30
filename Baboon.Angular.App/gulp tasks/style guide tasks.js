var es = require('event-stream');
var gulp = require('gulp');
var minifyCSS = require('gulp-minify-css');
var rename = require('gulp-rename');
var sass = require('gulp-sass');
var gutil = require('gulp-util');
var debug = require('gulp-debug');
var concat = require('gulp-concat');
var runSequence = require('run-sequence');

var environment = require('../environment.config.js');

var minifyCSSConfig = {
    comments: true,
    spare: true
};

gulp.task('styleguide:assets', ['clean:assets'], function () {
    return gulp.src([
        environment.commonDirectory + '/styleguide/Bootstrap-3-Offline-Docs-master/**/*',
        '!' + environment.commonDirectory + '/styleguide/Bootstrap-3-Offline-Docs-master/dist/css/*',
        '!' + environment.commonDirectory + '/styleguide/Bootstrap-3-Offline-Docs-master/dist/css/*'
    ])
        .pipe(gulp.dest(environment.styleguideDirectory + '/'));
});


gulp.task('styleguide:css', [], function () {

    var vendorSource = gulp.src(environment.vendorCssFiles);
    var customSource = gulp.src([environment.sourceDirectory + '/**/*.scss', environment.commonDirectory + '/common/**/*.scss'])
        .pipe(sass({
            includePaths: environment.sassIncludeDirectories
        }));

    return es.merge(vendorSource, customSource)
        .pipe(concat('bootstrap.css'))
        .pipe(gulp.dest(environment.styleguideDirectory + '/dist/css/'))
        .pipe(minifyCSS(minifyCSSConfig))
        .pipe(rename('bootstrap.min.css'))
        .pipe(gulp.dest(environment.styleguideDirectory + '/dist/css/'))
        .on('error', gutil.log);
});


// build task
gulp.task('styleguide:build', [], function (callback) {
    runSequence('styleguide:assets', 'styleguide:css', callback);
});
