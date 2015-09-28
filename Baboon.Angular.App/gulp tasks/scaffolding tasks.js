var gulp = require('gulp');
var debug = require('gulp-debug');
var gutil = require('gulp-util');
var scaffold = require('gulp-ng-scaffold');
var del = require('del');
var fs = require('fs');
var fetchSchema = require('fetch-swagger-schema');
var runSequence = require('run-sequence');
var environment = require('../environment.config.js');


gulp.task('fetch', function (callback) {
    fetchSchema(environment.swaggerAPIDocsUrl, function (error, schema) {
        if (error) {
            return console.error(error);
        } else {
            fs.mkdir(environment.apiSpecificationDirectory, function (error) {
                if(error){
                    console.log('Failed to create directory: ' + environment.apiSpecificationDirectory);
                }
                
                for (var i = 0; i < schema.apis.length; i++) {
                    var api = schema.apis[i];

                    name = environment.apiSpecificationDirectory + '/' + api.path.replace('/', '') + '.json';

                    fs.writeFileSync(name, JSON.stringify(api.apiDeclaration), 'utf-8');
                }
                callback();
            });
            
        }

    });
});

gulp.task('scaffold', function () {
    var opts = {
        debug: environment.debug,
        appName: environment.appName,
        resourceOutput: environment.sourceDirectory + '/generated/resources',
        testsOutput: environment.sourceDirectory + '/generated/resources/tests',
        serverBase: environment.appConfig[environment.target].serverBase,
        resourceConfigName: 'resourceConfig',
        ngAnnotateOptions: {
            remove: true,
            add: true,
            single_quotes: true
        }
    };

    return gulp.src(environment.apiSpecificationDirectory + '/*.json')
        .pipe(scaffold(opts))
        .on('error', gutil.log);
});


gulp.task('scaffold-api', ['clean:apis', 'clean:generated'], function (callback) {
    runSequence('fetch', 'scaffold', callback);
});