var runSequence = require('run-sequence');
var gulp = require('gulp');
var gutil = require('gulp-util');
var sass = require('gulp-sass');
var cache = require('gulp-cached');
var remember = require('gulp-remember');
var uglify = require('gulp-uglify');
var ngAnnotate = require('gulp-ng-annotate');
var templateCache = require('gulp-angular-templatecache');
var jshint = require('gulp-jshint');
var livereload = require('gulp-livereload');
var watch = require('gulp-watch');
var filesize = require('gulp-filesize');
var preprocess = require('gulp-preprocess');
var inject = require("gulp-inject");
var debug = require('gulp-debug');

var environment = require('../environment.config.js');

var watchConfiguration = {
    usePolling: false,
    interval: 500
};

gulp.task('watch:lint', function () {
    var glob = [environment.sourceDirectory + '/**/*.js', environment.commonDirectory + '/common/**/*.js'];
    return gulp.watch(glob, watchConfiguration, function () {
        return gulp.src(glob)
            .pipe(cache('lint'))
            .pipe(jshint('.jshintrc'))
            .pipe(jshint.reporter('jshint-stylish'));
    });
});


gulp.task('watch:css', function () {
    var glob = [environment.sourceDirectory + '/**/*.scss', environment.commonDirectory + '/common/**/*.scss'];
    return gulp.watch(glob, watchConfiguration, function () {
        return gulp.src(glob)
            .pipe(cache('css'))
            .pipe(sass({
                includePaths: [environment.bootstrapDirectory + '/assets/stylesheets'],
            }))
            .pipe(remember('css'))
            .pipe(gulp.dest(environment.distributionDirectory + '/css/app/'))
            .pipe(livereload());
    });
});

gulp.task('watch:templates', function () {
    var glob = [
        environment.sourceDirectory + '/**/*.tpl.html',
        environment.commonDirectory + '/common/**/*.tpl.html'
    ];
    return gulp.watch(glob, watchConfiguration, function () {
        var opts = {
            standalone: true
        };
        return gulp.src(glob)
            .pipe(cache('templates'))
            .pipe(templateCache(opts))
            .pipe(remember('templates'))
            .pipe(gulp.dest(environment.distributionDirectory + '/js/app/templates'))
            .pipe(livereload());
    });
});

gulp.task('watch:js', function () {
    var glob = [
        environment.sourceDirectory + '/**/*.js',
        environment.commonDirectory + '/common/**/*.js',
        '!' + environment.sourceDirectory + '/**/*.spec.js',
        '!' + environment.commonDirectory + '/common/**/*.spec.js',
        '!' + environment.sourceDirectory + '/**/*.tpl.js',
        '!' + environment.commonDirectory + '/common/**/*.tpl.js'
    ];
    return gulp.watch(glob, watchConfiguration, function () {
        var opts = {
            remove: true,
            add: true,
            single_quotes: true
        };
        return gulp.src(glob)
            .pipe(cache('js'))
            .pipe(ngAnnotate(opts))
            .pipe(remember('js'))
            .pipe(gulp.dest(environment.distributionDirectory + '/js/app/'))
            .pipe(livereload());
    });
});

gulp.task('watch:js:vendor', function () {
    var glob = environment.vendorJsFiles;
    return gulp.watch(glob, watchConfiguration, function () {
        return gulp.src(glob)
            .pipe(cache('js:vendor'))
            .pipe(ngAnnotate())
            .pipe(uglify())
            .pipe(remember('js:vendor'))
            .pipe(gulp.dest(environment.distributionDirectory + '/js/vendor'))
            .pipe(livereload());
    });
});


//watch tasks
gulp.task('watch', [], function () {
    livereload.listen({
        port: environment.liveReloadPort,
        quiet: true
    });

    runSequence('dev:build', ['watch:lint', 'watch:css', 'watch:js', 'watch:js:vendor', 'watch:templates']);
});