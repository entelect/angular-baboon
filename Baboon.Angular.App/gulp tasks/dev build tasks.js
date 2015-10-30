var path = require('path');
var es = require('event-stream');
var gulp = require('gulp');
var templateCache = require('gulp-angular-templatecache');
var rename = require('gulp-rename');
var sass = require('gulp-sass');
var gutil = require('gulp-util');
var template = require('gulp-template');
var inject = require("gulp-inject");
var debug = require('gulp-debug');
var ngAnnotate = require('gulp-ng-annotate');
var runSequence = require('run-sequence');
var flatten = require('gulp-flatten');
var preprocess = require('gulp-preprocess');
var angularFilesort = require('gulp-angular-filesort');

var environment = require('../environment.config.js');


gulp.task('dev:js:vendor', [], function () {

    return gulp.src(environment.vendorJsFiles)
        .pipe(ngAnnotate())
        .pipe(gulp.dest(environment.buildDirectory + '/js/vendor'))
        .on('error', gutil.log);
});

gulp.task('dev:css:vendor', ['clean:css:vendor'], function () {
    return gulp.src(environment.vendorCssFiles)
        .pipe(gulp.dest(environment.buildDirectory + '/css/vendor'))
        .on('error', gutil.log);
});

gulp.task('dev:fonts', ['clean:fonts'], function () {
    return gulp.src(environment.fonts)
        .pipe(flatten())
        .pipe(gulp.dest(environment.buildDirectory + '/fonts'))
        .on('error', gutil.log);
});

gulp.task('dev:css', ['clean:css'], function () {
    return gulp.src([environment.sourceDirectory + '/**/*.scss', environment.commonDirectory + '/common/**/*.scss'])
        .pipe(sass({
            includePaths: environment.sassIncludeDirectories,
        }))
        .pipe(gulp.dest(environment.buildDirectory + '/css/app/'))
        .on('error', gutil.log);;
});

gulp.task('dev:templates', ['clean:templates'], function () {
    var opts = {
        standalone: true
    };
    return gulp.src([
        environment.sourceDirectory + '/**/*.tpl.html',
        environment.commonDirectory + '/common/**/*.tpl.html'
    ])
        .pipe(templateCache(opts))
        .pipe(gulp.dest(environment.buildDirectory + '/js/app/templates'))
        .on('error', gutil.log);
});

gulp.task('dev:js', ['clean:js'], function () {
    var opts = {
        remove: true,
        add: true,
        single_quotes: true
    };
    return gulp.src([
        environment.sourceDirectory + '/**/*.js',
        environment.commonDirectory + '/common/**/*.js',
        '!' + environment.sourceDirectory + '/**/*.spec.js',
        '!' + environment.commonDirectory + '/common/**/*.spec.js',
        '!' + environment.sourceDirectory + '/**/*.tpl.js',
        '!' + environment.commonDirectory + '/common/**/*.tpl.js'
    ])
        .pipe(ngAnnotate(opts))
        .pipe(gulp.dest(environment.buildDirectory + '/js/app/'))
        .on('error', gutil.log);
});

gulp.task('dev:config', ['clean:js:config'], function () {
    var appConfig = environment.appConfig[environment.target];
    appConfig.debug = environment.debug;

    var opts = {
        remove: true,
        add: true,
        single_quotes: true
    };

    return gulp.src(environment.sourceDirectory + '/config.tpl.js')
        .pipe(template(appConfig))
        .pipe(ngAnnotate(opts))
        .pipe(rename('config.js'))
        .pipe(gulp.dest(environment.buildDirectory + '/js/app/'))
        .on('error', gutil.log);
});

gulp.task('dev:assets', ['clean:assets'], function () {
    return gulp.src(environment.sourceDirectory + '/assets/**/*')
        .pipe(gulp.dest(environment.buildDirectory + '/assets'));
});

gulp.task('dev:index', ['clean:html'], function () {
    var target = gulp.src(environment.sourceDirectory + '/index.html');

    var vendorJSSources = gulp.src([environment.buildDirectory + '/js/vendor/**/*'])
        .pipe(angularFilesort())
        .on('error', gutil.log);

    var vendorCSSSources = gulp.src([
        environment.buildDirectory + '/css/vendor/**/*',
        environment.distributionDirectory + '/fonts/**/*'
    ])
        .on('error', gutil.log);

    var templateSources = gulp.src([environment.buildDirectory + '/js/app/templates/**/*.js'])
        .on('error', gutil.log);

    var sources = gulp.src([
        environment.buildDirectory + '/js/app/**/*.module.js',
        environment.buildDirectory + '/js/app/**/*.config.js',
        environment.buildDirectory + '/js/app/**/*',
        environment.buildDirectory + '/css/app/**/*'
    ])
        .on('error', gutil.log);


    return target
        .pipe(inject(
            es.merge(vendorJSSources, vendorCSSSources)
            , {
                ignorePath: environment.buildDirectory.replace('./', ''),
                addRootSlash: false,
                name: 'vendor'
            }))
        .pipe(inject(templateSources, {
            ignorePath: environment.buildDirectory.replace('./', ''),
            addRootSlash: false,
            name: 'templates'
        }))
        .pipe(inject(sources, {
            ignorePath: environment.buildDirectory.replace('./', ''),
            addRootSlash: false
        }))
        .pipe(preprocess({ context: { ENV: environment.target } })) //conditionally include livereload dependant on target
        .pipe(gulp.dest(environment.buildDirectory))
        .on('error', gutil.log);
});


// build task
gulp.task('dev:build', [], function (callback) {
    runSequence(['lint', 'dev:js:vendor', 'dev:css:vendor', 'dev:fonts', 'dev:css', 'dev:templates', 'dev:js', 'dev:config', 'dev:assets'], 'dev:index', 'copy-build-to-dist', callback);
});
