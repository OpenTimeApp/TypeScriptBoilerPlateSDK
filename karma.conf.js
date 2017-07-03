module.exports = function(config) {
    config.set({
        basePath: '.',
        frameworks: ['jasmine', 'karma-typescript'],
        plugins: [
            require('karma-jasmine'),
            require('karma-phantomjs-launcher'),
            require('karma-typescript')
        ],
        preprocessors: {
            "**/*.ts": ["karma-typescript"]
        },
        files: [
            './src/**/*.ts'
        ],
        browsers: ['PhantomJS']
    })
};