module.exports = function (grunt) {

    'use strict';

    var config = require('config');

    grunt.config('clean', {
        css: [
            config.directories.admin + '/' + config.directories.css,
            config.directories.css
        ],
        js: [
            ''
        ],
        lib: [
            config.files.composer.lock,
            config.directories.config + '/' + config.files.sass.lint,
            config.directories.lib
        ]
    });

};