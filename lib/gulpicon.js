'use strict';

var gulp = require('gulp'),
    glob = require('glob'),
    gulpicon = require('gulpicon/tasks/gulpicon');

gulp.task('icons', function () {
    var files = glob.sync('./src/images/*.svg');

    gulpicon(files, {
        datapngcss: 'png.css',
        datasvgcss: 'svg.css',
        dest: './src/css',
        cssprefix: '.',
        loadersnippet: 'loader.txt',
        template: './src/images/width-and-height.hbs',
        urlpngcss: 'fallback.css'
    })
});