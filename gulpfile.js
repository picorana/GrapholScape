var gulp = require("gulp");
var uglify = require("gulp-uglify-es").default;
var gulpConcat = require("gulp-concat");
var merge2 = require("merge2");
var path = require("path");

var module_list = []

gulp.task("build", function() {
  var c = gulp.src("./js/*.js");
  var j = gulp.src(module_list);

  merge2([j, c])
    .pipe(gulpConcat("./dist/grapholscape.js"))
    .pipe(gulp.dest("."));
});

gulp.task("uglify", function() {
  var c = gulp.src("./js/*.js");
  var j = gulp.src(module_list);

  merge2([j, c])
    .pipe(gulpConcat("./dist/grapholscape_min.js"))
    .pipe(uglify())
    .pipe(gulp.dest("."));
});

gulp.task("watch", function() {
  gulp.watch("./js/**/*.js", ["build"]);
});

gulp.task("default", ["build", "watch"]);