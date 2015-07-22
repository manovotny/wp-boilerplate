'use strict';

var gulp = require('gulp'),
    eslint = require('gulp-eslint');

gulp.task('eslint', function () {
    var sources = [
        './*.js',
        './lib/**/*.js',
        './src/lib/**/*.js'
    ];

    return gulp.src(sources)
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failOnError());
});