'use strict';

var gulp = require('gulp'),
    eslint = require('gulp-eslint');

gulp.task('default', ['eslint']);

gulp.task('eslint', function () {
    var sources = [
        './*.js',
        './src/lib/**/*.js'
    ];

    return gulp.src(sources)
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failOnError());
});

var browserify = require('browserify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var globby = require('globby');
var through = require('through2');
var gutil = require('gulp-util');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('browserify', function () {
    var bundleStream = through();

    bundleStream
        .pipe(source('bundle.js'))
        .pipe(buffer())
        .pipe(sourcemaps.init({loadMaps: true}))
        .pipe(uglify())
        .on('error', gutil.log)
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('./src/js/'));

    globby(['./entries/**/*.js'], function(error, entries) {
        if (error) {
            bundleStream.emit('error', error);
            return;
        }

        var b = browserify({
            entries: entries,
            debug: true
        });

        b.bundle().pipe(bundleStream);
    });

    return bundleStream;
});
