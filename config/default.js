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
            curl: 'curl_downloads',
            source: 'src',
            translations: 'lang'
        },
        project: {
            composer: {
                name: 'PROJECT_COMPOSER_NAME',
                type: 'PROJECT_COMPOSER_TYPE' // Should be `library` or `project`.
            },
            description: 'PROJECT_DESCRIPTION',
            git: 'PROJECT_GIT',
            name: 'PROJECT_NAME',
            slug: 'PROJECT_SLUG',
            type: 'PROJECT_TYPE', // Should be `plugin` or `theme`.
            url: 'http://project-url.com',
            version: '0.0.0'
        }
    };

}());
