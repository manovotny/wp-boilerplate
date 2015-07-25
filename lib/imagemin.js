'use strict';

var gulp = require('gulp'),
    imagemin = require('gulp-imagemin');

gulp.task('imagemin', function () {
    return gulp.src('./src/images/*.svg')
        .pipe(imagemin({
            multipass: true,
            svgoPlugins: [
                { removeDesc: true },
                { removeTitle: true }
            ]
        }))
        .pipe(gulp.dest('./src/images/.min'));
});