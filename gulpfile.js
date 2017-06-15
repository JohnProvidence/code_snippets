var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

gulp.task('browserSync', function() {
	browserSync.init({
			proxy: 'http://localhost/code_snippets/'
	});

});

gulp.task('sass', function() {
	return gulp.src('scss/**/*.scss')
	.pipe(sass())
	.pipe(gulp.dest('css/'))
	.pipe(browserSync.reload({
		stream:true
	}))
});

gulp.task('watch', ['browserSync', 'sass'],  function() {
	gulp.watch('scss/**/*.scss', ['sass']);
	gulp.watch('*.php', browserSync.reload );
	gulp.watch('php/*.php', browserSync.reload);
	gulp.watch('js/main.js', browserSync.reload);
	gulp.watch('js/**/*.json', browserSync.reload);
	gulp.watch('images/**/*', browserSync.reload);
});