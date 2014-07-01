module.exports = function (grunt) {

    'use strict';

    var directories = {
            admin: 'admin',
            css: 'css',
            sass: 'sass'
        },
        expand = true,
        extension = '.css',
        options = {
            noCache: true
        },
        source = [
            '**/*.scss'
        ];

    grunt.config('sass', {
        sass: {
            options: options,
            files: [
                {
                    expand: expand,
                    cwd: directories.admin + '/' + directories.sass,
                    src: source,
                    dest: directories.admin + '/' + directories.css,
                    ext: extension
                },
                {
                    expand: expand,
                    cwd: directories.sass,
                    src: source,
                    dest: directories.css,
                    ext: extension
                }
            ]
        }
    });

};