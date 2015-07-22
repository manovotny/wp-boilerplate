'use strict';

var gulp = require('gulp');

gulp.task('default', [
    'browserify'
]);

gulp.task('build', [
    'eslint',
    'default'
]);
