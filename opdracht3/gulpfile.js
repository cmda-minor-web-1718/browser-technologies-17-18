var gulp = require('gulp');
var browserSync = require('browser-sync');
var reload      = browserSync.reload;

gulp.task('browser-sync', function () {
	browserSync.init(["./app/*.css", "./app/*.js"], {
		https: false,
		server: {
			baseDir: ['./app']
		}
	});
});

gulp.task('default', ['browser-sync'], function () {
	gulp.watch('./app/*.css'); // Watching all scss changes on changes in the background
	gulp.watch('./app/*.js').on('change', browserSync.reload);
});
