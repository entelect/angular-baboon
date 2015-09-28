var gulp = require('gulp');
var gutil = require('gulp-util');
var del = require('del');
var filesize = require('gulp-filesize');
var debug = require('gulp-debug');

var environment = require('../environment.config.js');

gulp.task('clean', function (callback) {
    del([
        'coverage/*', 
        environment.buildDirectory + '/*',
        environment.revisionDirectory + '/*',
        environment.distributionDirectory + '/*'
        ], {
            force: true
        },
        callback);
});

gulp.task('clean:html', function (callback) {
    del([
        environment.buildDirectory + '/**/*.html',
        environment.distributionDirectory + '/**/*.html'], {
            force: true
        },
        callback);
});

gulp.task('clean:dist', function (callback) {
    del([
        environment.distributionDirectory + '/'], {
            force: true
        },
        callback);
});

gulp.task('clean:rev', function (callback) {
    del([
       environment.revisionDirectory + '/*'], {
            force: true
        },
        callback);
});

gulp.task('clean:content', function (callback) {
    del([
       environment.cssDistributionDirectory + '/css',environment.cssDistributionDirectory + '/assets'], {
            force: true
        },
        callback);
});

gulp.task('clean:assets', function (callback) {
    del([
        environment.buildDirectory + '/assets/**/*',
        environment.distributionDirectory + '/assets/**/*'], {
            force: true
        },
        callback);
});

gulp.task('clean:templates', function (callback) {
    del([
        environment.buildDirectory + '/js/app/templates/**/*.js',
        environment.distributionDirectory + '/js/app/templates/**/*.min.js'], {
            force: true
        },
        callback);
});

gulp.task('clean:css', function (callback) {
    del([
        environment.buildDirectory + '/css/**/*.css',
        environment.distributionDirectory + '/css/**/*.min.css'], {
            force: true
        },
        callback);
});

gulp.task('clean:js', function (callback) {
    del([
		'!' + environment.buildDirectory + '/js/app/**/config.js',
        '!' + environment.distributionDirectory + '/js/app/**/config*.min.js',
        environment.buildDirectory + '/js/app/**/*.js',
        environment.distributionDirectory + '/js/app/**/*.min.js'], {
            force: true
        },
        callback);
});

gulp.task('clean:js:config', function (callback) {
    del([
        environment.buildDirectory + '/js/app/config.js',
        environment.distributionDirectory + '/js/app/config*.min.js'], {
            force: true
        },
        callback);
});


gulp.task('clean:js:vendor', function (callback) {
    del([
        environment.buildDirectory + '/js/vendor/**/*.js',
        environment.distributionDirectory + '/js/vendor/**/*.js'], {
            force: true
        },
        callback);
});

gulp.task('clean:css:vendor', function (callback) {
    del([
        environment.buildDirectory + '/css/vendor/**/*.css',
        environment.distributionDirectory + '/css/vendor/**/*.css'], {
            force: true
        },
        callback);
});

gulp.task('clean:fonts', function (callback) {
    del([
        environment.buildDirectory + '/fonts/**/*',
        environment.distributionDirectory + '/fonts/**/*'
        ], {
            force: true
        },
        callback);
});

gulp.task('clean:apis', function (callback) {
    del([
        environment.apiSpecificationDirectory
    ], {
            force: true
        },
        callback);
});

gulp.task('clean:generated', function (callback) {
    del([
        environment.sourceDirectory + '/app/resources/generated'
    ], {
            force: true
        },
        callback);
});
