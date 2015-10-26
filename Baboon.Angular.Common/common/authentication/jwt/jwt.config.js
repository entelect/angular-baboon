(function () {
    'use strict';

    angular.module('angular-baboon.common.authentication.jwt')
        .config(function ($httpProvider) {
            $httpProvider.interceptors.push('jwtAuthInterceptor');
        });

})();