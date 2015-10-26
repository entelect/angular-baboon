(function () {
    'use strict';
    // factory
    angular
        .module('angular-baboon.common.authentication.basic.interceptor', [])
        .factory('basicAuthHttpInterceptor', ['$log', '$q', '$injector', '$rootScope', function ($log, $q, $injector, $rootScope) {
            var authentication;
            return {
                'requestError': function (rejection) {
                    if (rejection.status === 401) {
                        authentication = $injector.get('authentication');
                        authentication.unauthorizedRequest();
                        $rootScope.$broadcast('unauthorized-request');
                    }
                    return $q.reject(rejection);
                },
                'responseError': function (rejection) {
                    if (rejection.status === 401) {
                        authentication = $injector.get('authentication');
                        authentication.unauthorizedRequest();
                        $rootScope.$broadcast('unauthorized-request');
                    }
                    return $q.reject(rejection);
                }
            };
        }]);
})();