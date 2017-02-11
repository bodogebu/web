var gulp = require('gulp');
var config = require('../config');
var stylConf = config.stylus;
var reactConf = config.react;

gulp.task('watch', function() {
	gulp.watch(stylConf.watch, ['stylus']);
	gulp.watch(reactConf.watch, ['react']);
});