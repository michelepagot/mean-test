var gulp = require('gulp');

// include plug-ins
var jshint = require('gulp-jshint');
var mocha = require('gulp-mocha');


// JS hint task
gulp.task('jshint', function() {
  gulp.src('./src/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

gulp.task('mocha_test', function() {
  return gulp.src(['test/test-*.js'], { read: false })
    .pipe(mocha({
      reporter: 'spec',
      globals: {
        should: require('should')
      }
    }));
  });

gulp.task('default', function(){
  gulp.run('jshint', 'mocha_test');
  gulp.watch(scriptFiles, function(){
    gulp.run('jshint', 'mocha_test');
  });
});