(function() {
    'use strict';
    angular.module('angular-baboon')
        .factory('Home', ['$resource', 'resourceConfig', function($resource, resourceConfig) {

                var serverUrl = resourceConfig.serverName;
                return $resource(serverUrl, null, {
                    
                        // Home.getCards

                        // The `getCards` method performs a `GET` on `/api/home/cards`
                        
                        getCards: { 
                            url: '/api/home/cards', 
                            method: 'GET',
                            isArray: true,
                        },
                });
            }]
        );
}());

