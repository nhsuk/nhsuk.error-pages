const gulp = require('gulp');
const clean = require('gulp-clean');
const sass = require('gulp-sass');
const cleanCss = require('gulp-clean-css');
const nunjucksRender = require('gulp-nunjucks-render');

function cleanDist() {
  return gulp.src('./dist', { allowEmpty: true })
    .pipe(clean());
}

function compileCSS() { 
  return gulp.src('./src/main.scss')
    .pipe(sass())
    .on('error', sass.logError)
    .pipe(cleanCss())
    .pipe(gulp.dest('./src'));
};

function buildPages() {
  return gulp.src([
    'src/pages/*.html',
  ])
  .pipe(nunjucksRender({
    path: [
      'src/'
    ]
  }))
  .pipe(gulp.dest('./dist'));
};

function cleanTemp() {
  return gulp.src('./src/main.css', { allowEmpty: true })
    .pipe(clean());
}

gulp.task('default', gulp.series([
  cleanDist,
  compileCSS,
  buildPages,
  cleanTemp,
]));
