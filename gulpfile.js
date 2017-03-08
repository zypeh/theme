const gulp = require('gulp')
const sass = require('gulp-sass')
const autoprefixer = require('gulp-autoprefixer')

gulp.task('sass', () => gulp.src('./source/scss/*.scss')
  .pipe(sass({ outputStyle: 'compressed' }))
  .pipe(autoprefixer())
  .pipe(gulp.dest('./source/css'))
)

gulp.task('default', ['sass'], () => {
  gulp.watch('./source/scss/*.scss', ['sass'])
})
