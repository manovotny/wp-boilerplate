module.exports = function (grunt) {

    'use strict';

    var config = require('config');

    grunt.config('phpunit', {
        classes: {
            coverage: true,
            dir: config.paths.tests
        },
        options: {
            bin: config.paths.phpunit,
            colors: true
        }
    });

};