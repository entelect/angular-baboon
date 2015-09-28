(function() {
    'use strict';
    angular.module('angular-baboon')
        .factory('Users', ['$resource', 'resourceConfig', function($resource, resourceConfig) {

                var serverUrl = resourceConfig.serverName;
                return $resource(serverUrl, null, {
                    
                        // Users.addClientUser

                        // The `addClientUser` method performs a `POST` on `/api/users/:clientId`
                        
                        // Path parameter: `integer clientId`
                        
                        // Payload: `UserInputDto userDto`
                        addClientUser: { 
                            url: '/api/users/:clientId', 
                            method: 'POST',
                            params: {
                                clientId: '@clientId',
                            }
                        },
                    
                        // Users.search

                        // The `search` method performs a `POST` on `/api/users/:clientId/search`
                        
                        // Path parameter: `integer clientId`
                        
                        // Payload: `UserSearchParameterDto userSearchParameterDto`
                        search: { 
                            url: '/api/users/:clientId/search', 
                            method: 'POST',
                            params: {
                                clientId: '@clientId',
                            }
                        },
                    
                        // Users.get

                        // The `get` method performs a `GET` on `/api/users/:userId`
                        
                        // Path parameter: `integer userId`
                        
                        get: { 
                            url: '/api/users/:userId', 
                            method: 'GET',
                            isArray: false,
                            params: {
                                userId: '@userId',
                            }
                        },
                    
                        // Users.updateUser

                        // The `updateUser` method performs a `PUT` on `/api/users/:userId`
                        
                        // Path parameter: `integer userId`
                        
                        // Payload: `UserDisplayDto userDto`
                        updateUser: { 
                            url: '/api/users/:userId', 
                            method: 'PUT',
                            params: {
                                userId: '@userId',
                            }
                        },
                    
                        // Users.getAllUsers

                        // The `getAllUsers` method performs a `POST` on `/api/users/search`
                        
                        // Payload: `UserSearchParameterDto userSearchParameterDto`
                        getAllUsers: { 
                            url: '/api/users/search', 
                            method: 'POST',
                        },
                });
            }]
        );
}());

