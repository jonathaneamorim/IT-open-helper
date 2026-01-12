const gulp = require('gulp');
const uglify = require('gulp-uglify');

gulp.task('minificar-all', () => {
    return gulp.src('dist/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('test/js'))
});