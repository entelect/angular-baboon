module.exports = function (karma) {
    karma.set({
        /** 
         * From where to look for files, starting with the location of this file.
         */
        basePath: '',

        /**
         * This is the list of file patterns to load into the browser during testing.
         */
        files: [
            //load order matters here
            { pattern: 'bower_components/angular/angular.min.js', watched: true, served: true, included: true },
            { pattern: '.build/**/*.min.js', watched: true, served: true, included: true },
            { pattern: '.build/**/*.module.js', watched: true, served: true, included: true },
            { pattern: '.build/**/*.config.js', watched: true, served: true, included: true },
            { pattern: '.build/**/*.js', watched: true, served: true, included: true },
            { pattern: 'bower_components/angular-mocks/angular-mocks.js', watched: true, served: true, included: true },
            { pattern: 'src/**/*.spec.js', watched: true, served: true, included: true },
            { pattern: 'src/**/*.spec.json', watched: true, served: true, included: false }

        ],
        exclude: [
            'bower_components/es5-shim/es5-sham.min.js'
        ],
        frameworks: ['jasmine-jquery', 'jasmine'],
        plugins: [
            'karma-teamcity-reporter',
            'karma-coverage',
            'karma-jasmine-jquery',
            'karma-html2js-preprocessor',
            'karma-jasmine',
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-ie-launcher',
            'karma-phantomjs-launcher',
            'karma-phantomjs2-launcher'
        ],

        preprocessors: {
            '.build/**/*.js': ['coverage'],
            'src/**/*.spec.json': ['html2js']
        },
        /**
         * How to report, by default.
         */
        reporters: ['progress', 'coverage'],
        
        coverageReporter: {
            type: 'html',
            dir: 'coverage'
        },
        /**
         * On which port should the browser connect, on which port is the test runner
         * operating, and what is the URL path for the browser to use.
         */
        port: 9018,
        runnerPort: 9100,
        browserNoActivityTimeout: 100000,
        urlRoot: '/',

        /** 
         * Disable file watching by default.
         */
        autoWatch: false,

        /*
            LOG_DISABLE
            LOG_ERROR
            LOG_WARN
            LOG_INFO
            LOG_DEBUG
    
            logLevel: 'LOG_DEBUG',
        */

    

        /**
         * The list of browsers to launch to test on. This includes only "Firefox" by
         * default, but other browser names include:
         * Chrome, ChromeCanary, Firefox, Opera, Safari, PhantomJS
         *
         * Note that you can also use the executable name of the browser, like "chromium"
         * or "firefox", but that these vary based on your operating system.
         *
         * You may also leave this blank and manually navigate your browser to
         * http://localhost:9018/ when you're running tests. The window/tab can be left
         * open and the tests will automatically occur there during the build. This has
         * the aesthetic advantage of not launching a browser every time you save.
         */
        browsers: [
            'PhantomJS'
        ]
    });
};

