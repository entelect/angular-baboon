(function() {
    'use strict';
    angular.module('angular-baboon')
        .factory('Account', ['$resource', 'resourceConfig', function($resource, resourceConfig) {

                var serverUrl = resourceConfig.serverName;
                return $resource(serverUrl, null, {
                    
                        // Account.activateMyAccount

                        // The `activateMyAccount` method performs a `POST` on `/api/account/activate`
                        
                        // Payload: `ResetPasswordCredentials resetPasswordCredentials`
                        activateMyAccount: { 
                            url: '/api/account/activate', 
                            method: 'POST',
                        },
                    
                        // Account.login

                        // The `login` method performs a `POST` on `/api/account/login`
                        
                        // Payload: `LoginCredentials loginCredentials`
                        login: { 
                            url: '/api/account/login', 
                            method: 'POST',
                        },
                    
                        // Account.logout

                        // The `logout` method performs a `DELETE` on `/api/account/logout`
                        
                        logout: { 
                            url: '/api/account/logout', 
                            method: 'DELETE',
                        },
                    
                        // Account.getUserNavMenu

                        // The `getUserNavMenu` method performs a `GET` on `/api/account/menu`
                        
                        getUserNavMenu: { 
                            url: '/api/account/menu', 
                            method: 'GET',
                            isArray: true,
                        },
                    
                        // Account.forgotPassword

                        // The `forgotPassword` method performs a `POST` on `/api/account/password/forgot`
                        
                        // Payload: `ForgotPasswordCredentials forgotPasswordCredentials`
                        forgotPassword: { 
                            url: '/api/account/password/forgot', 
                            method: 'POST',
                        },
                    
                        // Account.resetMyPassword

                        // The `resetMyPassword` method performs a `POST` on `/api/account/password/reset`
                        
                        // Payload: `ResetPasswordCredentials resetPasswordCredentials`
                        resetMyPassword: { 
                            url: '/api/account/password/reset', 
                            method: 'POST',
                        },
                    
                        // Account.validateGuid

                        // The `validateGuid` method performs a `GET` on `/api/account/validate/:guid`
                        
                        // Path parameter: `Guid guid`
                        
                        validateGuid: { 
                            url: '/api/account/validate/:guid', 
                            method: 'GET',
                            isArray: true,
                            params: {
                                guid: '@guid',
                            }
                        },
                });
            }]
        );
}());

