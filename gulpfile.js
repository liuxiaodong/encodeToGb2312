var gulp = require('gulp');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var rimraf = require('rimraf');

gulp.task('clean', function() {
  rimraf.sync('encodeToGb2312.min.js');
});

gulp.task('uglify', function() {
  gulp.src('encodeToGb2312.js')
  .pipe(uglify())
  .pipe(rename("encodeToGb2312.min.js"))
  .pipe(gulp.dest('./'));
});

gulp.task('build', ['clean', 'uglify']);
