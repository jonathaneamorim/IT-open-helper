const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const uglify = require('gulp-uglify');
const cssnano = require('gulp-cssnano');

gulp.task('sass', function() {
    return gulp.src('src/sass/*.scss') 
      .pipe(sass().on('error', sass.logError))  
      .pipe(gulp.dest('dist/css'));  
  });


gulp.task('minificar-all', () => {
    gulp.src('src/js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('dist/js')), 

    gulp.src('src/css/*.css')  
    .pipe(cssnano()) 
    .pipe(gulp.dest('dist/css'))
});