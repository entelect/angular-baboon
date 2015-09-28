(function() {
    'use strict';
    angular.module('angular-baboon')
        .factory('Reports', ['$resource', 'resourceConfig', function($resource, resourceConfig) {

                var serverUrl = resourceConfig.serverName;
                return $resource(serverUrl, null, {
                    
                        // Reports.getAll

                        // The `getAll` method performs a `GET` on `/api/reports`
                        
                        getAll: { 
                            url: '/api/reports', 
                            method: 'GET',
                            isArray: true,
                        },
                    
                        // Reports.createReport

                        // The `createReport` method performs a `POST` on `/api/reports`
                        
                        // Payload: `ReportDto reportDto`
                        createReport: { 
                            url: '/api/reports', 
                            method: 'POST',
                        },
                    
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
                    
                        // Reports.updateRDLLink

                        // The `updateRDLLink` method performs a `PUT` on `/api/reports/:reportId`
                        
                        // Path parameter: `string reportId`
                        
                        // Payload: `ReportDto reportDto`
                        updateRDLLink: { 
                            url: '/api/reports/:reportId', 
                            method: 'PUT',
                            params: {
                                reportId: '@reportId',
                            }
                        },
                    
                        // Reports.search

                        // The `search` method performs a `POST` on `/api/reports/search`
                        
                        // Payload: `ReportSearchParamterDto reportSearchParamter`
                        search: { 
                            url: '/api/reports/search', 
                            method: 'POST',
                        },
                });
            }]
        );
}());

