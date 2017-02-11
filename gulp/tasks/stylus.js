var gulp = require('gulp');
var stylus = require('gulp-stylus');
var plumber = require('gulp-plumber');
var notify = require('gulp-notify');

var config = require('../config');
var stylConf = config.stylus;

gulp.task('stylus', function() {
	return gulp.src(stylConf.src)
		.pipe(plumber({errorHandler: notify.onError('<%= error.message %>')}))
		.pipe(stylus())
		.pipe(gulp.dest(stylConf.dest))
		.pipe(notify('stylus: converted <%= file.relative %>'));
});