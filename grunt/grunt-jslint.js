module.exports = function (grunt) {

    'use strict';

    grunt.config('jslint', {
        js: {
            directives: {
                browser: true,
                nomen: true,
                predef: [
                    'module',
                    'require'
                ]
            },
            src: [
                '!admin/js/**/*.min.js',
                '!js/**/*.min.js',
                'admin/js/**/*.js',
                'bower.json',
                'composer.json',
                'config/*.js',
                'Gruntfile.js',
                'grunt/*.js',
                'js/**/*.js',
                'package.json'
            ]
        }
    });

};