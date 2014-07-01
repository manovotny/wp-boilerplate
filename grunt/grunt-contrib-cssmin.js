module.exports = function (grunt) {

    'use strict';

    var directories = {
            admin: 'admin/css',
            css: 'css'
        },
        expand = true,
        extension = '.min.css',
        options = {
            keepSpecialComments: 0
        },
        source = [
            '*.css',
            '!*.min.css'
        ];

    grunt.config('cssmin', {
        admin: {
            options: options,
            expand: expand,
            cwd: directories.admin,
            src: source,
            dest: directories.admin,
            ext: extension
        },
        css: {
            options: options,
            expand: expand,
            cwd: directories.css,
            src: source,
            dest: directories.css,
            ext: extension
        }
    });

};