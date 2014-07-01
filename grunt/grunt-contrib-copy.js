module.exports = function (grunt) {

    'use strict';

    var config = require('config');

    grunt.config('copy', {
        bower: {
            files: [
                {
                    expand: true,
                    cwd: config.paths.bower + '/sass-lint-config',
                    src: [
                        config.files.sassLint
                    ],
                    dest: config.paths.config
                }
            ]
        },
        composer: {
            files: [
                {
                    expand: true,
                    cwd: config.paths.composer + '/manovotny',
                    src: [
                        '**/*'
                    ],
                    dest: config.paths.lib
                }
            ]
        }
    });

};