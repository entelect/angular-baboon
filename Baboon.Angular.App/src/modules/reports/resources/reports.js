(function() {
    'use strict';
    angular.module('angular-baboon')
        .factory('Reports', ['$resource', 'resourceConfig', function($resource, resourceConfig) {

                var serverUrl = resourceConfig.serverName;
                return $resource(serverUrl, null, {
                    
                        // Reports.get

                        // The `get` method performs a `GET` on `/api/reports/:reportId`
                        
                        // Path parameter: `integer reportId`
                        
                        get: { 
                            url: '/api/reports/:reportId', 
                            method: 'GET',
                            isArray: false,
                            params: {
                                reportId: '@reportId',
                            }
                        }, 
                        
                        // Reports.search

                        // The `search` method performs a `POST` on `/api/reports/search`
                        
                        // Payload: `ReportSearchParamterDto reportSearchParamterDto`
                        search: { 
                            url: '/api/reports/search', 
                            method: 'POST',
                        },
                });
            }]
        );
}());

