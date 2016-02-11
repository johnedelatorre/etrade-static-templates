var gulp         = require('gulp');
var sass         = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var rimraf       = require('gulp-rimraf');
var runSequence  = require('gulp-run-sequence');
var minifyCss    = require('gulp-minify-css');
var rename       = require('gulp-rename');
var header       = require('gulp-header');
var fs           = require('fs');

var packageJson;
packageJson = JSON.parse(fs.readFileSync('./package.json'),'utf8');

gulp.task('clean', function(cb) {
  return gulp.src(['./dist','./.tmp'], { read: false })
    .pipe(rimraf({ force: true }));
});

gulp.task('copy',function(){
  
  gulp.src('./bower_components/bootstrap-sass-official/assets/javascripts/bootstrap.js')
    .pipe(gulp.dest('./dist/js'));

  gulp.src('./src/_variables.scss')
    .pipe(gulp.dest('./dist'));

  return gulp.src('./src/fonts/**/*')
    .pipe(gulp.dest('./dist/fonts'));
});

gulp.task('sass', function(){
  return gulp.src('./src/etrade-bootstrap.scss')
    .pipe(sass())
    .pipe(autoprefixer())
    // .pipe(rename({ extname: '-' + packageJson.version + '.css' }))
    .pipe(header('\/\*Compiled on <%= date %>\*\/\n', {date: new Date}))
    .pipe(gulp.dest('./dist/css'))
    .pipe(minifyCss())
    //Again, because minify strips comments
    .pipe(header('\/\*Compiled on <%= date %>\*\/\n', {date: new Date}))
    .pipe(rename({ extname: '.min.css' }))
    .pipe(gulp.dest('./dist/css'));
});

gulp.task('build', function(cb) {
  runSequence('clean', ['copy', 'sass'], cb);
});