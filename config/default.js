module.exports = (function () {

    'use strict';

    return {
        author: {
            email: 'AUTHOR_EMAIL',
            name: 'AUTHOR_NAME',
            url: 'AUTHOR_URL'
        },
        copyright: '2014',
        description: 'DESCRIPTION',
        files: {
            bower: 'bower.json',
            composer: 'composer.json',
            composerLock: 'composer.lock',
            grunt: 'Gruntfile.js',
            package: 'package.json',
            readme: 'README.md',
            sassLint: '.scss-lint.yml'
        },
        name: 'NAME',
        package: 'PACKAGE',
        paths: {
            admin: 'admin',
            bower: 'bower_components',
            classes: 'classes',
            composer: 'vendor',
            config: 'config',
            css: 'css',
            grunt: 'grunt',
            inc: 'inc',
            js: 'js',
            lib: 'lib',
            phpunit: 'vendor/bin/phpunit',
            sass: 'sass',
            tests: 'tests'
        },
        repository: 'REPOSITORY',
        version: '0.0.0'
    };

}());
