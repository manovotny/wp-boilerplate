module.exports = function (grunt) {

    'use strict';

    var config = require('config'),
        overwrite = true,
        previous = {
            copyright: '2014',
            description: 'DESCRIPTION',
            package: 'PACKAGE',
            name: 'NAME',
            repository: 'REPOSITORY',
            version: '0.0.0'
        };

    grunt.config('replace', {
        copyright: {
            src: [
                '**/*.php'
            ],
            overwrite: overwrite,
            replacements: [
                {
                    from: '@copyright ' + previous.copyright,
                    to: '@copyright ' + config.copyright
                }
            ]
        },
        description: {
            src: [
                '*.php',
                config.files.bower,
                config.files.composer,
                config.files.package,
                config.files.readme
            ],
            overwrite: overwrite,
            replacements: [
                {
                    from: '"description": "' + previous.description + '"',
                    to: '"description": "' + config.description + '"'
                },
                {
                    from: '* Description: ' + previous.description,
                    to: '* Description: ' + config.description
                },
                {
                    from: '* ' + previous.description,
                    to: '* ' + config.description
                },
                {
                    from: previous.description,
                    to: config.description
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
                    from: '* Plugin Name: ' + previous.name,
                    to: '* Plugin Name: ' + config.name
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
                    from: '@package ' + previous.package,
                    to: '@package ' + config.package
                }
            ]
        },
        repository: {
            src: [
                '*.php',
                config.files.bower,
                config.files.composer,
                config.files.package,
                config.files.readme
            ],
            overwrite: overwrite,
            replacements: [
                {
                    from: '"name": "' + previous.repository + '"',
                    to: '"name": "' + config.repository + '"'
                },
                {
                    from: '"name": "manovotny/' + previous.repository + '"',
                    to: '"name": "manovotny/' + config.repository + '"'
                },
                {
                    from: 'manovotny/' + previous.repository,
                    to: 'manovotny/' + config.repository
                },
                {
                    from: previous.repository,
                    to: config.repository
                }
            ]
        },
        version: {
            src: [
                config.paths.classes + '/**/*.php',

                config.files.bower,
                config.files.composer,
                config.files.package
            ],
            overwrite: overwrite,
            replacements: [
                {
                    from: '"version": "' + previous.version + '"',
                    to: '"version": "' + config.version + '"'
                },
                {
                    from: '$version = \'' + previous.version + '\'',
                    to: '$version = \'' + config.version + '\''
                }
            ]
        },
        updatePrevious: {
            src: [
                config.paths.grunt + '/grunt-text-replace.js'
            ],
            overwrite: overwrite,
            replacements: [
                {
                    from: "copyright: '" + previous.copyright + "'",
                    to: "copyright: '" + config.copyright + "'"
                },
                {
                    from: "description: '" + previous.description + "'",
                    to: "description: '" + config.description + "'"
                },
                {
                    from: "package: '" + previous.package + "'",
                    to: "package: '" + config.package + "'"
                },
                {
                    from: "name: '" + previous.name + "'",
                    to: "name: '" + config.name + "'"
                },
                {
                    from: "repository: '" + previous.repository + "'",
                    to: "repository: '" + config.repository + "'"
                },
                {
                    from: "version: '" + previous.version + "'",
                    to: "version: '" + config.version + "'"
                }
            ]
        }
    });

};