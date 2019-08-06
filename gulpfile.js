"use strict";

var gulp = require("gulp");
var sass = require("gulp-sass");
var sassGlob = require("gulp-sass-glob");

sass.compiler = require("node-sass");

gulp.task("styles", function() {
  return gulp
    .src("css/style.scss")
    .pipe(sassGlob())
    .pipe(sass())
    .pipe(gulp.dest("css/sass"));y
});

gulp.task("sass", function() {
  return gulp
    .src("./css/sass/**/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest("./css"));
});

gulp.task("sass:watch", function() {
  gulp.watch("./css/sass/core/**/*.scss", ["sass"]);
});
