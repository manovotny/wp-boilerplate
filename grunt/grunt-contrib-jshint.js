module.exports = function (grunt) {

    'use strict';

    var config = require('config'),
        stylish = require('jshint-stylish'),

        jshintrc = config.paths.config + '/' + config.files.jshint,
        options;

    // Read .jshintrc file from WordPress core.
    options = JSON.parse(grunt.file.read(jshintrc));

    // Add Browserify globals.
    options.globals.global = false;
    options.globals.module = false;
    options.globals.require = false;

    // Add ignores.
    options.ignores = [
        config.paths.admin + '/' + config.paths.js + '/**/*.concat.js',
        config.paths.admin + '/' + config.paths.js + '/**/*.min.js',
        config.paths.js + '/**/*.concat.js',
        config.paths.js + '/**/*.min.js'
    ];

    // Add reporter.
    options.reporter = stylish;

    grunt.config('jshint', {
        options: options,
        js: {
            src: [
                config.paths.admin + '/' + config.paths.js + '/**/*.js',
                config.paths.js + '/**/*.js'
            ]
        }
    });

};