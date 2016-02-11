var gulp = require('gulp');

var rimraf      = require('gulp-rimraf');
var run         = require('gulp-run');
var runSequence = require('gulp-run-sequence');
var zip         = require('gulp-zip');
var rename      = require('gulp-rename');
var fs          = require('fs');

var packageJson;
packageJson = JSON.parse(fs.readFileSync('./package.json'),'utf8');

gulp.task('docs:clean', function() {
  return gulp.src('./dist/docs', { read: false })
    .pipe(rimraf({ force: true }));
});

gulp.task('docs:post-clean', function() {
  return gulp.src('./docs/CHANGELOG.md', { read: false })
    .pipe(rimraf({ force: true }));
});

gulp.task('docs:copy-js',function(){
  return gulp.src('./bower_components/bootstrap-sass-official/assets/javascripts/bootstrap.js')
    .pipe(gulp.dest('./docs/js'));
});

gulp.task('docs:copy-changelog',function(){
  return gulp.src('./CHANGELOG.md')
    .pipe(gulp.dest('./docs/'));
});

gulp.task('docs:copy-package',function(cb){
  var json = {globals:{}};
  json.globals.package = packageJson;
  fs.writeFile('./docs/_harp.json', JSON.stringify(json), function (err) {
    if (err){  throw err;
    }else{
      cb();
    }
  });
});

gulp.task('docs:copy',['docs:copy-package', 'docs:copy-js','docs:copy-changelog'], function(){
  
  gulp.src('./dist/css/**/*')
    .pipe(gulp.dest('./docs/page-templates/css'));

  gulp.src('./dist/js/**/*')
    .pipe(gulp.dest('./docs/page-templates/js'));

  gulp.src('./dist/fonts/**/*')
    .pipe(gulp.dest('./docs/page-templates/fonts'));

  return gulp.src('./dist/fonts/**/*')
    .pipe(gulp.dest('./docs/fonts'));
});

gulp.task('docs:compile', function () {
  return run('harp compile docs dist/docs').exec()  // prints "Hello World\n".
    .pipe(gulp.dest('.tmp/harp'));    // Writes "Hello World\n" to output/echo.
})

gulp.task('docs:download', function(){

  var folder = 'etrade-bootstrap';
  if(packageJson && packageJson.hasOwnProperty('version')){
    folder += '-v'+packageJson.version;
  }
  return gulp.src(['./dist/**/*', '!./dist/docs/**/*','!./dist/docs'])
    .pipe(gulp.dest('./.tmp/'+folder))
    .pipe(zip(folder+'.zip'))
    .pipe(gulp.dest('./docs/downloads/'));

});

gulp.task('docs:build', function(cb) {
  runSequence('docs:clean', 'docs:copy', 'docs:compile', 'docs:download','docs:post-clean', cb);
});