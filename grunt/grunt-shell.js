module.exports = function (grunt) {

    'use strict';

    grunt.config('shell', {
        ci: {
            command: [
                'npm install bower',
                'bower install',
                'composer install --prefer-dist --no-interaction --no-dev --optimize-autoloader'
            ].join('&&')
        },
        init: {
            command: [
                'bower install',
                'composer install'
            ].join('&&')
        },
        refresh: {
            command: 'composer dump-autoload'
        },
        update: {
            command: [
                'npm prune',
                'npm install',
                'npm update',
                'npm update caniuse-db',
                'bower prune',
                'bower update',
                'composer update'
            ].join('&&')
        }
    });

};
