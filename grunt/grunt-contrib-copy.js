module.exports = function (grunt) {

    'use strict';

    var config = require('config');

    grunt.config('copy', {
        bower: {
            files: [
                {
                    expand: true,
                    cwd: config.directories.bower + '/sass-lint-config',
                    src: [
                        config.files.sass.lint
                    ],
                    dest: config.directories.config
                }
            ]
        },
        composer: {
            files: [
                {
                    expand: true,
                    cwd: config.directories.composer + '/manovotny',
                    src: [
                        '**/*'
                    ],
                    dest: config.directories.lib
                }
            ]
        }
    });

};