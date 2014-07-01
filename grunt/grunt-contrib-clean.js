module.exports = function (grunt) {

    'use strict';

    var config = require('config');

    grunt.config('clean', {
        css: [
            config.paths.admin + '/' + config.paths.css,
            config.paths.css
        ],
        js: [
            ''
        ],
        lib: [
            config.files.composerLock,

            config.paths.config + '/' + config.files.sassLint,
            config.paths.lib
        ]
    });

};