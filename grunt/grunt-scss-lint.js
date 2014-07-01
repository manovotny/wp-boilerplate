module.exports = function (grunt) {

    'use strict';

    var config = require('config');

    grunt.config('scsslint', {
        sass: {
            options: {
                config: config.directories.config + '/' + config.files.sass.lint
            },
            src: [
                'admin/sass/**/*.scss',
                'sass/**/*.scss'
            ]
        }
    });

};