var gulp = require('gulp');
var karma = require('karma');
var path = require('path');
var gutil = require('gulp-util');
var debug = require('gulp-debug');
var karmaParseConfig = require('karma/lib/config').parseConfig;

function runKarma(configFilePath, options, isCI ,cb) {

	configFilePath = path.resolve(configFilePath);

	var server = karma.server;
	var log=gutil.log, colors=gutil.colors;
	var config = karmaParseConfig(configFilePath, {});

    Object.keys(options).forEach(function(key) {
      config[key] = options[key];
    });
	
	if(isCI){
		config.reporters = ['teamcity','coverage']
	}

	server.start(config, function(exitCode) {
		log('Karma has exited with ' + colors.red(exitCode));
		cb();
		process.exit(exitCode);
	});
}

gulp.task('dev:test', ['dev:build'], function(cb) {
	runKarma('karma.config.js', {
		autoWatch: false,
		singleRun: true
	}, false, cb);
});

gulp.task('release:test', ['release:build'], function(cb) {
	runKarma('karma.config.js', {
		autoWatch: false,
		singleRun: true
	}, true, cb);
});

