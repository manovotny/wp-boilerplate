module.exports = function (grunt) {

    'use strict';

    grunt.config('shell', {
        update: {
            command: [
                'npm-check-updates -u',
                'npm update',
                'bower update',
                'composer update'
            ].join('&&')
        }
    });

};