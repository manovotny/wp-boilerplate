module.exports = (function () {

    'use strict';

    return {
        author: {
            email: 'author@email.com',
            name: 'AUTHOR_NAME',
            url: 'http://author-url.com',
            username: 'AUTHOR_USERNAME'
        },
        files: {
            browserify: 'bundle'
        },
        paths: {
            curl: 'downloads',
            source: 'src',
            translations: 'lang'
        },
        project: {
            composer: 'PROJECT_COMPOSER',
            description: 'PROJECT_DESCRIPTION',
            git: 'PROJECT_GIT',
            name: 'PROJECT_NAME',
            package: 'PROJECT_PACKAGE',
            slug: 'PROJECT_SLUG',
            type: 'PROJECT_TYPE', // Should be `plugin` or `theme`.
            url: 'http://project-url.com',
            version: '0.0.0'
        }
    };

}());
