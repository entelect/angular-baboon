(function () {
    'use strict';
    // factory
    angular
        .module('angular-baboon.common.jwt-authentication.interceptor', [])
        .factory('jwtAuthInterceptor', ['$q', '$injector', '$location', 'localStorageService', function ($q, $injector, $location, localStorageService) {

            var authInterceptorFactory = {};

            var request = function (config) {

                config.headers = config.headers || {};

                var authData = localStorageService.get('authorizationData');
                if (authData) {
                    config.headers.Authorization = 'Bearer ' + authData.token;
                }

                return config;
            }

            var responseError = function (rejection) {
                if (rejection.status === 401) {
                    var authService = $injector.get('authService');
                    var authData = localStorageService.get('authorizationData');

                    if (authData) {
                        if (authData.useRefreshTokens) {
                            $location.path('/refresh');
                            return $q.reject(rejection);
                        }
                    }
                    authService.logOut();
                    $location.path('/login');
                }
                return $q.reject(rejection);
            }

            authInterceptorFactory.request = request;
            authInterceptorFactory.responseError = responseError;

            return authInterceptorFactory;
        }]);
})();