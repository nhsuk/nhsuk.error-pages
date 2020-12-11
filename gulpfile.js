const gulp = require('gulp');
const clean = require('gulp-clean');
const nunjucksRender = require('gulp-nunjucks-render');

function cleanDist() {
  return gulp.src('dist', { allowEmpty: true })
    .pipe(clean());
}

function buildPages() {
  return gulp.src([
    'src/pages/*.html',
  ])
  .pipe(nunjucksRender({
    path: [
      'src/'
    ]
  }))
  .pipe(gulp.dest('dist'));
};

gulp.task('default', gulp.series([
  cleanDist,
  buildPages,
]));
