module.exports = function (grunt) {

    'use strict';

    var config = require('config');

    grunt.config('concat', {
        options: {
            separator: ';'
        },
        admin: {
            src: [
                config.paths.admin + '/' + config.paths.js + '/**/*.js'
            ],
            dest: config.paths.admin + '/' + config.paths.js + 'script.concat.js'
        },
        root: {
            src: [
                config.paths.js + '/**/*.js'
            ],
            dest: config.paths.js + 'script.concat.js'
        }
    });

};