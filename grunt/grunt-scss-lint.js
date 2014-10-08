module.exports = function (grunt) {

    'use strict';

    var config = require('config'),
        glob = require('glob'),

        pattern = '/**/*.scss',
        task = {};

    glob(config.paths.source + pattern, {}, function (error, files) {
        if (files) {
            task = {
                options: {
                    config: 'bower_components/sass-lint-config/.scss-lint.yml'
                },
                src: [
                    config.paths.source + pattern
                ]
            };
        }
    });

    grunt.config('scsslint', {
        sass: task
    });

};