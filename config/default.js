module.exports = (function () {

    'use strict';

    return {
        copyright: '2014',
        description: 'DESCRIPTION',
        directories: {
            admin: 'admin',
            bower: 'bower_components',
            composer: 'vendor',
            config: 'config',
            css: 'css',
            lib: 'lib',
            sass: 'sass'
        },
        files: {
            composer: {
                lock: 'composer.lock'
            },
            sass: {
                lint: '.scss-lint.yml'
            }
        },
        package: 'PACKAGE',
        name: 'NAME',
        repository: 'REPOSITORY',
        version: '0.0.0'
    };

}());
