module.exports = function (grunt) {

    'use strict';

    grunt.config('watch', {
        css: {
            files: [
                'admin/sass/**/*.scss',
                'sass/**/*.scss'
            ],
            tasks: [
                'css'
            ]
        },
        js: {
            files: [
                '!admin/js/**/*.min.js',
                '!js/**/*.min.js',
                'admin/js/**/*.js',
                'js/**/*.js',
            ],
            tasks: [
                'js'
            ]
        }
    });

};