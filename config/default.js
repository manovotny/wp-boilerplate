module.exports = (function () {

    'use strict';

    return {
        author: {
            email: 'AUTHOR_EMAIL',
            name: 'AUTHOR_NAME',
            url: 'AUTHOR_URL'
        },
        files: {
            bower: 'bower.json',
            composer: 'composer.json',
            composerLock: 'composer.lock',
            grunt: 'Gruntfile.js',
            package: 'package.json',
            readme: 'README.md',
            sassLint: '.scss-lint.yml'
        },
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
        project: {
            composer: 'PROJECT_COMPOSER',
            copyright: 'PROJECT_COPYRIGHT',
            description: 'PROJECT_DESCRIPTION',
            git: 'PROJECT_GIT',
            name: 'PROJECT_NAME',
            package: 'PROJECT_PACKAGE',
            slug: 'PROJECT_SLUG',
            url: 'PROJECT_URL',
            version: 'PROJECT_VERSION'
        }
    };

}());
