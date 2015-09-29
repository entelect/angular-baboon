(function () {
    'use strict';

    angular.module('angular-baboon.common.spinners')
        .factory('spinnerHttpInterceptor', ['$q', '$injector', '$rootScope', function ($q, $injector, $rootScope) {
            var $http;
            return {
                'request': function (config) {
                    $rootScope.$broadcast('spinner-request-started');
                    return config || $q.when(config);
                },
                'response': function (response) {
                    //Can be used to run some code on all successfull HTTP responses - not used currently
                    $http = $http || $injector.get('$http');
                    if ($http.pendingRequests.length < 1) {
                        $rootScope.$broadcast('spinner-request-completed');
                    }
                    return response || $q.when(response);
                },
                'requestError': function (rejection) {
                    //Can be used to run some code on all successfull HTTP responses - not used currently
                    $http = $http || $injector.get('$http');
                    if ($http.pendingRequests.length < 1) {
                        $rootScope.$broadcast('spinner-request-completed');
                    }
                    return rejection || $q.reject(rejection);
                }
            };
        }]);

})();