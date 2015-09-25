(function () {
    'use strict';
    angular.module('angular-baboon')
        .provider('appEnvironment', function appEnvironmentProvider() {
            this.environment = {
                serverName: '<%= webapi %>',
                serverBase: '<%= serverBase %>',
                ssrsServerBase: '<%= ssrsBase %>',
                debug: '<%= debug %>'
            };

            this.$get = function () {
                return this.environment;
            };
        })
        .config(function ($urlRouterProvider, $logProvider, $compileProvider, appEnvironmentProvider) {
            $urlRouterProvider.otherwise('/home');
            $compileProvider.debugInfoEnabled(appEnvironmentProvider.environment.debug === 'true');
            $logProvider.debugEnabled(appEnvironmentProvider.environment.debug === 'true');
        })
        .config(function (localStorageServiceProvider, appEnvironmentProvider) {
            localStorageServiceProvider.setPrefix('angular-baboon');
            localStorageServiceProvider.setStorageCookieDomain(appEnvironmentProvider.environment.serverBase);
            localStorageServiceProvider.setNotify(true, true);
        })
        .config(function ($httpProvider) {
            $httpProvider.useApplyAsync(true);
        });

}());