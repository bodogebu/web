var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
var notify = require('gulp-notify');

var config = require('../config');
var reactConf = config.react;

gulp.task('react', function() {
	browserify(reactConf.src, { debug: true })
		.transform(babelify)
		.bundle()
		.on('error', function(err) {
			var args = Array.prototype.slice.call(arguments);
			notify.onError({
				title: "Compile Error",
				message: "<%= error %>"
			}).apply(this, args);
			console.error(err.stack);
			this.emit('end');
		})
		.pipe(source('app.js'))
		.pipe(gulp.dest(reactConf.dest))
		.pipe(notify('react: converted <%= file.relative %>'));
});