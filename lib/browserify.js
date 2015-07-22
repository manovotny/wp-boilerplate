'use strict';

var gulp = require('gulp'),
    browserify = require('browserify'),
    source = require('vinyl-source-stream'),
    buffer = require('vinyl-buffer'),
    globby = require('globby'),
    through = require('through2'),
    gutil = require('gulp-util'),
    uglify = require('gulp-uglify'),
    sourcemaps = require('gulp-sourcemaps');

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
