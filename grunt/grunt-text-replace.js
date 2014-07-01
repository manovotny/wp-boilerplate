module.exports = function (grunt) {

    'use strict';

    var config = require('config'),
        overwrite = true;

    grunt.config('replace', {
        copyright: {
            src: [
                '**/*.php'
            ],
            overwrite: overwrite,
            replacements: [
                {
                    from: '@copyright ' + config.copyright.from,
                    to: '@copyright ' + config.copyright.to
                }
            ]
        },
        description: {
            src: [
                '*.php',
                'bower.json',
                'composer.json',
                'package.json',
                'README.md'
            ],
            overwrite: overwrite,
            replacements: [
                {
                    from: '"description": "' + config.description.from + '"',
                    to: '"description": "' + config.description.to + '"'
                },
                {
                    from: '* Description: ' + config.description.from,
                    to: '* Description: ' + config.description.to
                },
                {
                    from: '* ' + config.description.from,
                    to: '* ' + config.description.to
                },
                {
                    from: config.description.from,
                    to: config.description.to
                }
            ]
        },
        name: {
            src: [
                '*.php'
            ],
            overwrite: overwrite,
            replacements: [
                {
                    from: '* Plugin Name: ' + config.name.from,
                    to: '* Plugin Name: ' + config.name.to
                }
            ]
        },
        package: {
            src: [
                '**/*.php'
            ],
            overwrite: overwrite,
            replacements: [
                {
                    from: '@package ' + config.package.from,
                    to: '@package ' + config.package.to
                }
            ]
        },
        repository: {
            src: [
                '*.php',
                'bower.json',
                'composer.json',
                'package.json',
                'README.md'
            ],
            overwrite: overwrite,
            replacements: [
                {
                    from: '"name": "' + config.repository.from + '"',
                    to: '"name": "' + config.repository.to + '"'
                },
                {
                    from: '"name": "manovotny/' + config.repository.from + '"',
                    to: '"name": "manovotny/' + config.repository.to + '"'
                },
                {
                    from: 'manovotny/' + config.repository.from,
                    to: 'manovotny/' + config.repository.to
                },
                {
                    from: config.repository.from,
                    to: config.repository.to
                }
            ]
        },
        version: {
            src: [
                'bower.json',
                'classes/**/*.php',
                'composer.json',
                'package.json'
            ],
            overwrite: overwrite,
            replacements: [
                {
                    from: '"version": "' + config.version.from + '"',
                    to: '"version": "' + config.version.to + '"'
                },
                {
                    from: '$version = \'' + config.version.from + '\'',
                    to: '$version = \'' + config.version.to + '\''
                }
            ]
        }
    });

};