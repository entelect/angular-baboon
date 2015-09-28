(function() {
    'use strict';
    describe('Account', function () {
        var mockAccountResource;
        var $httpBackend;
        beforeEach(angular.mock.module('angular-baboon'));

        beforeEach(function () {
            angular.mock.inject(function ($injector) {
                $httpBackend = $injector.get('$httpBackend');
                mockAccountResource = $injector.get('Account');
            });
        });
        
                        
        /**
         * @action POST
         * @name Account.activateMyAccount
         * @body param ResetPasswordCredentials  resetPasswordCredentials 
         */
        describe('activateMyAccount', function () {
            var result;
            
            beforeEach(inject(function(Account) {
                spyOn(Account, 'activateMyAccount').and.callThrough();
                
                $httpBackend.expectPOST('/api/account/activate').respond();

                result = mockAccountResource.activateMyAccount(

                    {}
                );

                $httpBackend.flush();
            }));
            
            it('should be defined as a function', inject(function (Account) {
                expect(typeof Account.activateMyAccount === 'function').toEqual(true);
            }));    
            
            it('should be called with the correct parameters', inject(function (Account) {
                expect(Account.activateMyAccount).toHaveBeenCalledWith(

                    {}
                );
            }));
            
            it('should respond with a promise', inject(function () {
                expect(typeof result.$promise === 'object').toEqual(true);
            }));
        });
                        
        /**
         * @action POST
         * @name Account.login
         * @body param LoginCredentials  loginCredentials 
         */
        describe('login', function () {
            var result;
            
            beforeEach(inject(function(Account) {
                spyOn(Account, 'login').and.callThrough();
                
                $httpBackend.expectPOST('/api/account/login').respond();

                result = mockAccountResource.login(

                    {}
                );

                $httpBackend.flush();
            }));
            
            it('should be defined as a function', inject(function (Account) {
                expect(typeof Account.login === 'function').toEqual(true);
            }));    
            
            it('should be called with the correct parameters', inject(function (Account) {
                expect(Account.login).toHaveBeenCalledWith(

                    {}
                );
            }));
            
            it('should respond with a promise', inject(function () {
                expect(typeof result.$promise === 'object').toEqual(true);
            }));
        });
                        
        /**
         * @action DELETE
         * @name Account.logout
         */
        describe('logout', function () {
            var result;
            
            beforeEach(inject(function(Account) {
                spyOn(Account, 'logout').and.callThrough();
                
                $httpBackend.expectDELETE('/api/account/logout').respond();

                result = mockAccountResource.logout();

                $httpBackend.flush();
            }));
            
            it('should be defined as a function', inject(function (Account) {
                expect(typeof Account.logout === 'function').toEqual(true);
            }));    
            
            it('should be called with the correct parameters', inject(function (Account) {
                expect(Account.logout).toHaveBeenCalledWith();
            }));
            
            it('should respond with a promise', inject(function () {
                expect(typeof result.$promise === 'object').toEqual(true);
            }));
        });
                        
        /**
         * @action GET
         * @name Account.getUserNavMenu
         */
        describe('getUserNavMenu', function () {
            var result;
            
            beforeEach(inject(function(Account) {
                spyOn(Account, 'getUserNavMenu').and.callThrough();
                
                $httpBackend.expectGET('/api/account/menu')
                    .respond(
                        [{
                            data: 'test'
                        }]
                    );

                result = mockAccountResource.getUserNavMenu();

                $httpBackend.flush();
            }));
            
            it('should be defined as a function', inject(function (Account) {
                expect(typeof Account.getUserNavMenu === 'function').toEqual(true);
            }));    
            
            it('should be called with the correct parameters', inject(function (Account) {
                expect(Account.getUserNavMenu).toHaveBeenCalledWith();
            }));
            
            it('should respond with a promise containing data', inject(function () {
                expect(typeof result.$promise === 'object').toEqual(true);
                expect(result[0].data).toEqual('test');
            }));
        });
                        
        /**
         * @action POST
         * @name Account.forgotPassword
         * @body param ForgotPasswordCredentials  forgotPasswordCredentials 
         */
        describe('forgotPassword', function () {
            var result;
            
            beforeEach(inject(function(Account) {
                spyOn(Account, 'forgotPassword').and.callThrough();
                
                $httpBackend.expectPOST('/api/account/password/forgot').respond();

                result = mockAccountResource.forgotPassword(

                    {}
                );

                $httpBackend.flush();
            }));
            
            it('should be defined as a function', inject(function (Account) {
                expect(typeof Account.forgotPassword === 'function').toEqual(true);
            }));    
            
            it('should be called with the correct parameters', inject(function (Account) {
                expect(Account.forgotPassword).toHaveBeenCalledWith(

                    {}
                );
            }));
            
            it('should respond with a promise', inject(function () {
                expect(typeof result.$promise === 'object').toEqual(true);
            }));
        });
                        
        /**
         * @action POST
         * @name Account.resetMyPassword
         * @body param ResetPasswordCredentials  resetPasswordCredentials 
         */
        describe('resetMyPassword', function () {
            var result;
            
            beforeEach(inject(function(Account) {
                spyOn(Account, 'resetMyPassword').and.callThrough();
                
                $httpBackend.expectPOST('/api/account/password/reset').respond();

                result = mockAccountResource.resetMyPassword(

                    {}
                );

                $httpBackend.flush();
            }));
            
            it('should be defined as a function', inject(function (Account) {
                expect(typeof Account.resetMyPassword === 'function').toEqual(true);
            }));    
            
            it('should be called with the correct parameters', inject(function (Account) {
                expect(Account.resetMyPassword).toHaveBeenCalledWith(

                    {}
                );
            }));
            
            it('should respond with a promise', inject(function () {
                expect(typeof result.$promise === 'object').toEqual(true);
            }));
        });
                        
        /**
         * @action GET
         * @name Account.validateGuid
         * @path param Guid  guid 
         */
        describe('validateGuid', function () {
            var result;
            
            beforeEach(inject(function(Account) {
                spyOn(Account, 'validateGuid').and.callThrough();
                
                $httpBackend.expectGET('/api/account/validate/25892e17-80f6-415f-9c65-7395632f0223')
                    .respond(
                        [{
                            data: 'test'
                        }]
                    );

                result = mockAccountResource.validateGuid(
                {
                    guid: '25892e17-80f6-415f-9c65-7395632f0223',
                }
                );

                $httpBackend.flush();
            }));
            
            it('should be defined as a function', inject(function (Account) {
                expect(typeof Account.validateGuid === 'function').toEqual(true);
            }));    
            
            it('should be called with the correct parameters', inject(function (Account) {
                expect(Account.validateGuid).toHaveBeenCalledWith(
                {
                    guid: '25892e17-80f6-415f-9c65-7395632f0223',
                }
                );
            }));
            
            it('should respond with a promise containing data', inject(function () {
                expect(typeof result.$promise === 'object').toEqual(true);
                expect(result[0].data).toEqual('test');
            }));
        });
    });
}());

