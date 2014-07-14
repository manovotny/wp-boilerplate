module.exports = function (grunt) {

    'use strict';

    var expand = true,
        extension = '.css',
        options = {
            outputStyle: 'compressed'
        },
        source = [
            '**/*.scss'
        ];

    grunt.config('sass', {
        sass: {
            admin: {
                options: options,
                files: [
                    {
                        expand: expand,
                        cwd: config.paths.admin + '/' + config.paths.sass,
                        src: source,
                        dest: config.paths.admin + '/' + config.paths.css,
                        ext: extension
                    }
                ]
            },
            root: {
                options: options,
                files: [
                    {
                        expand: expand,
                        cwd: config.paths.sass,
                        src: source,
                        dest: config.paths.css,
                        ext: extension
                    }
                ]
            }
        }
    });

};