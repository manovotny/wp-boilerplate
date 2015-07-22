'use strict';

var gulp = require('gulp');

gulp.task('default', [
    'browserify',
    'sass'
]);

gulp.task('build', [
    'eslint',
    'scss-lint',
    'default'
]);
