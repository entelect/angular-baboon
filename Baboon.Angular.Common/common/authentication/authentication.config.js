(function () {
    'use strict';

    angular.module('angular-baboon.common.authentication')
        .config(function ($httpProvider) {
            $httpProvider.interceptors.push('authHttpInterceptor');
        });

})();