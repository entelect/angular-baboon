var gulp = require('gulp');
var gutil = require('gulp-util');

var environment = require('../environment.config.js');

gulp.task('copy-build-to-dist', function () {
    return gulp.src(environment.buildDirectory + '/**/*')
        .pipe(gulp.dest(environment.distributionDirectory))
        .on('error', gutil.log);
});

