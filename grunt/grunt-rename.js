module.exports = function (grunt) {

    'use strict';

    var config = require('config'),
        previous = require('../config/previous.js');

    grunt.config('rename', {
        project: {
            src: previous.project.slug + '.php',
            dest: config.project.slug + '.php'
        }
    });

};