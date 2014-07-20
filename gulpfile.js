
var gulp   = require('gulp');
var jshint = require('gulp-jshint');

gulp.task('lint', function() {
    return gulp
        .src(['gulpfile.js', 'src/*.js', 'test/*.js'])
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

gulp.task('default', ['lint'], function() {
  gulp.watch(['src/*.js', 'test/*.js'], function() {
    gulp.run('lint');
  });
});

