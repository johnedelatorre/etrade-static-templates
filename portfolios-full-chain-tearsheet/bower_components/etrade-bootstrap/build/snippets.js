var gulp        = require('gulp');
var fs          = require('fs');
var change      = require('gulp-change');
var mkdirp      = require('mkdirp');
var runSequence = require('gulp-run-sequence');
var run         = require('gulp-run');


function saveSnippet(name,content){
  content = content.replace(/\$/g,'\\$');
  var data = '<snippet>\n\
  <content><![CDATA['+content.trim()+']]></content>\n\
  <tabTrigger>*'+name+'</tabTrigger>\n\
  </snippet>';
  fs.writeFileSync('.tmp/snippets/'+name+'.sublime-snippet', data);
}

function makeSnippet(content) {
  var regex = /<!--\s?snippet\s?:\s?(.*?)\s?-->\s*?([\s\S]*?)\s*?<!--\s?end snippet\s?-->/g;
  while (match = regex.exec(content)) {
    console.log('match!');
    saveSnippet(match[1],match[2]);
  }
  return content;
}

gulp.task('snippets:compile', function () {
  mkdirp('./.tmp/trash', function (err) {
    return run('harp compile docs .tmp/snippet-html/').exec()  // prints "Hello World\n".
    .pipe(gulp.dest('.tmp/harp'));    // Writes "Hello World\n" to output/echo.
  });
})

gulp.task('snippets:make', function() { 
  mkdirp('.tmp/snippets', function (err) {
    return gulp.src('./.tmp/snippet-html/**/*.html')
      .pipe(change(makeSnippet))
      .pipe(gulp.dest('.tmp/trash'))
  });
}); 

gulp.task('snippets:copy', function() {
  setTimeout(function(){
    return gulp.src('./.tmp/snippets/**/*')
    .pipe(gulp.dest('./dist/tools/snippets'));
  },4000);
  
}); 
  
gulp.task('snippets:build', function(cb) {
  runSequence('snippets:compile','snippets:make', 'snippets:copy', cb);
});