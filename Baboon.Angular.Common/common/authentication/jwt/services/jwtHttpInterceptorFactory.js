(function () {
    'use strict';
    // factory
    angular
        .module('angular-baboon.common.jwt-authentication.interceptor', [])
        .factory('jwtAuthInterceptor',JwtAuthInterceptor);

        JwtAuthInterceptor.$inject = ['$q', '$injector', '$location', 'localStorageService', '$rootScope'];

         function JwtAuthInterceptor($q, $injector, $location, localStorageService, $rootScope) {

            var authInterceptorFactory = {
              request: request,
              responseError: responseError
            };

            return authInterceptorFactory;

            function request(config) {

                config.headers = config.headers || {};

                var authData = localStorageService.get('authorizationData');
                if (authData) {
                    config.headers.Authorization = 'Bearer ' + authData.token;
                }

                return config;
            }

            function responseError (rejection) {
                if (rejection.status === 401) {
                    var authService = $injector.get('authentication');
                    var state = $injector.get('$state');
                    var toaster = $injector.get('toaster');

                    authService.logout();

                    toaster.error("Your session has expired, Please log in again", "Error");
                    $rootScope.$broadcast('userLoggedInStatusChangedReloadNavBar');

                    state.go('login');
                }
                return $q.reject(rejection);
            }
          }
})();
