module.exports = (function () {

    'use strict';

    var files = {
            bower: 'bower.json',
            composer: 'composer.json',
            composerLock: 'composer.lock',
            grunt: 'Gruntfile.js',
            package: 'package.json',
            readme: 'README.md',
            sassLint: '.scss-lint.yml'
        },
        paths = {
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
        };

    return {
        copyright: '2014',
        description: 'DESCRIPTION',
        files: files,
        name: 'NAME',
        package: 'PACKAGE',
        paths: paths,
        repository: 'REPOSITORY',
        sources: {
            lib: [
                '**/*',

                '!**/' + paths.grunt + '/**',
                '!**/' + paths.tests + '/**',
                '!**/' + paths.composer + '/**',

                '!**/.git*',
                '!**/' + files.bower,
                '!**/' + files.composer,
                '!**/' + files.grunt,
                '!**/' + files.package
            ]
        },
        version: '0.0.0'
    };

}());
