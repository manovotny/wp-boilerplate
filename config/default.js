module.exports = (function () {

    'use strict';

    var author = {
            email: 'AUTHOR_EMAIL',
            name: 'AUTHOR_NAME',
            url: 'AUTHOR_URL',
            username: 'AUTHOR_USERNAME'
        },
        date = new Date(),
        generatedCopyright = date.getFullYear() + ' ' + author.name,
        project = {
            composer: 'PROJECT_COMPOSER',
            copyright: generatedCopyright,
            description: 'PROJECT_DESCRIPTION',
            git: 'PROJECT_GIT',
            name: 'PROJECT_NAME',
            package: 'PROJECT_PACKAGE',
            slug: 'PROJECT_SLUG',
            type: 'PROJECT_TYPE', // Should be `plugin` or `theme`.
            url: 'http://project-url.com',
            version: '0.0.0'
        };

    return {
        author: author,
        files: {
            bower: 'bower.json',
            composer: 'composer.json',
            composerLock: 'composer.lock',
            grunt: 'Gruntfile.js',
            jshint: '.jshintrc',
            package: 'package.json',
            readme: 'README.md',
            replace: 'replace.js',
            sassLint: '.scss-lint.yml',
            style: 'style.css'
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
            tests: 'tests',
            translations: 'lang',
            views: 'views'
        },
        project: project
    };

}());
