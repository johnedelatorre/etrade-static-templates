var gulp        = require('gulp');
var exec        = require('child_process').exec;
var fs          = require('fs');
var gzip        = require("gulp-gzip");
var runSequence = require('gulp-run-sequence');
var options = { gzippedOnly: true };

var config = JSON.parse(fs.readFileSync('./build/config.json'),'utf8');
var packageJson = JSON.parse(fs.readFileSync('./package.json'),'utf8');

gulp.task('htpasswd',function(cb){
  return gulp.src('.htpasswd')
  .pipe(gulp.dest('dist/docs/'))
});

gulp.task('deploy', ['htpasswd'], function (cb) {
  var rsync = 'rsync -av dist/docs '+ config.ssh.user+ '@'+config.ssh.url+':/home/deploy/static/styleguide/';
  exec(rsync + ' && ' + rsync + 'docs/'+packageJson.version, function (err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
    cb(err);
  });
});

gulp.task('deploy-wip', ['htpasswd'], function (cb) {
  var rsync = 'rsync -av dist/docs '+ config.ssh.user+ '@'+config.ssh.url+':/home/deploy/static/styleguide/';
  exec(rsync + 'docs/0.0.0', function (err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
    cb(err);
  });
});