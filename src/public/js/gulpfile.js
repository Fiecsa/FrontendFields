/**
 * Created by ericgagnon on 7/1/15.
 */
let gulp = require('gulp');
let sass = require('gulp-sass');
let minifyCSS = require('gulp-minify-css');
let rename = require('gulp-rename');

let uglify = require('gulp-uglify');

gulp.task('sass', function () {
    gulp.src('./sass/wickedpicker.scss')
        .pipe(sass({
            includePaths: require('node-bourbon').includePaths
        })).pipe(gulp.dest('./stylesheets'))
        .pipe(minifyCSS())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('./dist'));
});

gulp.task('uglify', function () {
    return gulp.src('src/*.js')
        .pipe(uglify())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('./dist'));
});

gulp.task('default', ['watch']);

gulp.task('watch', function () {
    gulp.watch('./sass/**/*.scss', ['sass']);
});

gulp.task('compress', ['uglify', 'sass']);