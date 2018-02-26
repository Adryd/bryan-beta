'use strict';

var gulp = require('gulp');
var pug = require('gulp-pug');
var sass = require('gulp-sass');
var minifyCSS = require('gulp-csso');
var jsonminify = require('gulp-jsonminify');

gulp.task('html', function () {
  return gulp.src(['./views/**/*.pug', '!./views/**/_*.pug'])
    .pipe(pug())
    .pipe(gulp.dest(function (file) {
      return file.base.split('views\\')[0] + 'dist\\' + file.base.split('views\\')[1];
    }))
});

gulp.task('sass', function () {
  return gulp.src('./css/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(minifyCSS())
    .pipe(gulp.dest('./dist/css'));
});

gulp.task('data', function () {
  return gulp.src(['./_data/**/*.*'])
    .pipe(jsonminify())
    .pipe(gulp.dest(function (file) {
      return file.base.split('_data\\')[0] + 'dist\\data\\' + file.base.split('_data\\')[1];
    }))
});

gulp.task('watch', function(){
  gulp.watch('./css/**/*.scss', ['sass']);
  gulp.watch('./views/**/*.pug', ['html']);
  gulp.watch('./_data/**/*.*', ['data']);
})

gulp.task('default', ['html', 'sass']);
