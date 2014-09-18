module.exports = function (grunt) {

    'use strict';

    grunt.config('jslint', {
        js: {
            directives: {
                nomen: true,
                predef: [
                    'module',
                    'require'
                ]
            },
            src: [
                '*.js',
                '*.json',
                'config/*.js',
                'grunt/*.js'
            ]
        }
    });

};