var gulp        = require('gulp');
var server      = require('gulp-server-livereload');
var runSequence = require('gulp-run-sequence');

gulp.task('watch', ['default'], function(){
  gulp.watch(['./docs/**/*', './src/**/*'], ['sass','docs:build']);
  return gulp.src('./dist').pipe(server());
});

//For just watching the sass files and regenerating them 
gulp.task('sass-watch', [], function(){
	gulp.watch('./src/**/*',['sass']);
	return gulp.src('./dist').pipe(server());
});

gulp.task('default', function(cb) {
  runSequence('build', ['docs:build','snippets:build'], cb);
});