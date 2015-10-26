(function () {
    'use strict';

    angular.module('angular-baboon.common.authentication.basic')
        .config(function ($httpProvider) {
            $httpProvider.interceptors.push('basicAuthHttpInterceptor');
        });

})();