'use strict';

var gulp = require('gulp'),
    phplint = require('phplint').lint;

gulp.task('phplint', function (callback) {
    var sources = [
            '*.php',
            './src/**/*.php'
        ],
        options = {
            limit: 10
        };

    phplint(sources, options, function (error) {
        if (error) {
            callback(error);
            process.exit(1);
        }
        callback();
    });
});