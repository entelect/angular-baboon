(function() {
    'use strict';
    angular.module('angular-baboon')
        .factory('HeartBeat', ['$resource', 'resourceConfig', function($resource, resourceConfig) {

                var serverUrl = resourceConfig.serverName;
                return $resource(serverUrl, null, {
                    
                        // HeartBeat.get

                        // The `get` method performs a `GET` on `/api/heartbeat`
                        
                        get: { 
                            url: '/api/heartbeat', 
                            method: 'GET',
                            isArray: true,
                        },
                });
            }]
        );
}());

