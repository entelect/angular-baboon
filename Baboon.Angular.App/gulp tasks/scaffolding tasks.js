var gulp = require('gulp');
var debug = require('gulp-debug');
var gutil = require('gulp-util');
var scaffold = require('gulp-ng-scaffold');
var del = require('del');
var fs = require('fs');
var SwaggerParser = require('swagger-parser');
var runSequence = require('run-sequence');
var environment = require('../environment.config.js');


gulp.task('fetch', function (callback) {
    SwaggerParser.validate(environment.swaggerAPIDocsUrl)
        .then(function (api) {
            console.log("Fetched Swagger API: %s, Version: %s", api.info.title, api.info.version);
            fs.mkdir(environment.apiSpecificationDirectory, function (error) {
                if (error) {
                    console.log('Failed to create directory: ' + environment.apiSpecificationDirectory);
                }
                var name = environment.apiSpecificationDirectory + '/' + api.info.title.replace('/', '') + '.json';
                fs.writeFileSync(name, JSON.stringify(api), 'utf-8');
                callback();
            });
        })
        .catch(function (err) {
            console.error(err);
        });
});

gulp.task('scaffold', function () {
    var opts = {
        debug: environment.debug,
        appName: environment.appName,
        resourceOutput: environment.sourceDirectory + '/generated/resources',
        testsOutput: environment.sourceDirectory + '/generated/resources/tests',
        serverBase: environment.appConfig[environment.target].serverBase,
        resourceConfigName: 'resourceConfig'
    };

    return gulp.src(environment.apiSpecificationDirectory + '/*.json')
        .pipe(scaffold(opts))
        .pipe(gulp.dest(environment.sourceDirectory + '/generated/resources'))
        .on('error', gutil.log);
});


gulp.task('scaffold-api', ['clean:apis', 'clean:generated'], function (callback) {
    runSequence('fetch', 'scaffold', callback);
});