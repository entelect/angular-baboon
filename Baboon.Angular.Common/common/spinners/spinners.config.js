(function () {
    'use strict';

    angular.module('angular-baboon.common.spinners')
        .config(function ($httpProvider) {
            $httpProvider.interceptors.push('spinnerHttpInterceptor');
        });

})();