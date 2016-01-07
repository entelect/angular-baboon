var gulp = require('gulp');
var es = require('event-stream');
var gutil = require('gulp-util');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var ngAnnotate = require('gulp-ng-annotate');
var rename = require('gulp-rename');
var minifyCSS = require('gulp-minify-css');
var minifyHTML = require('gulp-minify-html');
var template = require('gulp-template');
var inject = require("gulp-inject");
var debug = require('gulp-debug');
var runSequence = require('run-sequence');
var preprocess = require('gulp-preprocess');
var revall = require('gulp-rev-all');
var order = require('gulp-order');

var environment = require('../environment.config.js');

var revisioningConfig = {
    hashLength: 6,
    ignore: [/^\/favicon.ico$/g, '.html', '.woff', '.woff2', '.ttf', '.eot', '.otf', '.jpg', '.jpeg', '.png', 'gif', '.svg', '.ico'],
    silent: environment.silentFileRevisioning,
    quiet: environment.silentFileRevisioning
};

var annotationConfig = {
    remove: true,
    add: true,
    single_quotes: true
};

var minifyCSSConfig = {
    comments: true,
    spare: true
};

gulp.task('release:js', ['dev:js', 'dev:config'], function () {
    return gulp.src([
        environment.buildDirectory + '/js/app/**/*.module.js',
        environment.buildDirectory + '/js/app/**/*.config.js',
        environment.buildDirectory + '/js/app/**/*',
        '!' + environment.buildDirectory + '/js/app/templates/**/*.js'
    ])
        .pipe(concat('app.js'))
        .pipe(ngAnnotate(annotationConfig))
        .pipe(uglify())
        .pipe(rename('app.min.js'))
        .pipe(revall(revisioningConfig))
        .pipe(gulp.dest(environment.distributionDirectory + '/js'))
        .on('error', gutil.log);
});

gulp.task('release:js:vendor', ['dev:js:vendor'], function () {
    return gulp.src([environment.buildDirectory + '/js/vendor/**/*'])
        .pipe(order(environment.vendorJsOrder))
        .pipe(concat('vendor.js'))
        .pipe(rename('vendor.min.js'))
        .pipe(revall(revisioningConfig))
        .pipe(gulp.dest(environment.distributionDirectory + '/js'))
        .on('error', gutil.log);
});

gulp.task('release:css:vendor', ['dev:css:vendor'], function () {
    return gulp.src([environment.buildDirectory + '/css/vendor/**/*.css'])
        .pipe(concat('vendor.css'))
        .pipe(minifyCSS(minifyCSSConfig))
        .pipe(rename('vendor.min.css'))
        .pipe(revall(revisioningConfig))
        .pipe(gulp.dest(environment.distributionDirectory + '/css'))
        .on('error', gutil.log);
});

gulp.task('release:fonts', ['dev:fonts'], function () {
    return gulp.src([environment.buildDirectory + '/fonts/**/*'])
        .pipe(gulp.dest(environment.distributionDirectory + '/fonts'))
        .on('error', gutil.log);
});

gulp.task('release:css', ['dev:css'], function () {

    return gulp.src([environment.buildDirectory + '/css/app/**/*.css'])
        .pipe(concat('app.css'))
        .pipe(minifyCSS(minifyCSSConfig))
        .pipe(rename('app.min.css'))
        .pipe(revall(revisioningConfig))
        .pipe(gulp.dest(environment.distributionDirectory + '/css'))
        .on('error', gutil.log);
});

gulp.task('release:templates', ['dev:templates'], function () {
    return gulp.src([environment.buildDirectory + '/js/app/templates/**/*.js'])
        .pipe(concat('templates.js'))
        .pipe(rename('templates.min.js'))
        .pipe(revall(revisioningConfig))
        .pipe(gulp.dest(environment.distributionDirectory + '/js'))
        .on('error', gutil.log);
});

gulp.task('release:assets', ['dev:assets'], function () {
    return gulp.src(environment.buildDirectory + '/assets/**/*')
        .pipe(gulp.dest(environment.distributionDirectory + '/assets'))
        .on('error', gutil.log);
});


gulp.task('release:index', function () {
    var target = gulp.src(environment.sourceDirectory + '/index.html');

    var vendorSources = gulp.src([
        environment.distributionDirectory + '/js/vendor.min.*.js',
        environment.distributionDirectory + '/css/vendor.min.*.css',
        environment.distributionDirectory + '/fonts/**/*'])
        .on('error', gutil.log);

    var templateSources = gulp.src([
        environment.distributionDirectory + '/js/templates.min.*.js',
    ])
        .on('error', gutil.log);

    var sources = gulp.src([
        environment.distributionDirectory + '/js/app.min.*.js',
        environment.distributionDirectory + '/css/app.min.*.css'
    ])
        .on('error', gutil.log);

    return target
        .pipe(inject(vendorSources, {
            ignorePath: [
                environment.distributionDirectory,
                environment.buildDirectory
            ],
            addRootSlash: false,
            name: 'vendor'
        }))
        .pipe(inject(templateSources, {
            ignorePath: [
                environment.distributionDirectory,
                environment.buildDirectory
            ],
            addRootSlash: false,
            name: 'templates'
        }))
        .pipe(inject(sources, {
            ignorePath: [
                environment.distributionDirectory,
                environment.buildDirectory
            ],
            addRootSlash: false
        }))
        .pipe(preprocess({ context: { ENV: environment.target } })) //conditionally include livereload dependant on target
        .pipe(gulp.dest(environment.distributionDirectory))
        .on('error', gutil.log);
});

// build task optimized for distribution or production
gulp.task('release:build', [], function (callback) {
    runSequence(['lint', 'release:js:vendor', 'release:css:vendor', 'release:fonts', 'release:css', 'release:templates', 'release:js', 'release:assets'], 'release:index', callback);
});
