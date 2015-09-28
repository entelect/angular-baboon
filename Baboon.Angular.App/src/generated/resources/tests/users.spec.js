(function() {
    'use strict';
    describe('Users', function () {
        var mockUsersResource;
        var $httpBackend;
        beforeEach(angular.mock.module('angular-baboon'));

        beforeEach(function () {
            angular.mock.inject(function ($injector) {
                $httpBackend = $injector.get('$httpBackend');
                mockUsersResource = $injector.get('Users');
            });
        });
        
                        
        /**
         * @action POST
         * @name Users.addClientUser
         * @path param integer int32 clientId 
         * @body param UserInputDto  userDto 
         */
        describe('addClientUser', function () {
            var result;
            
            beforeEach(inject(function(Users) {
                spyOn(Users, 'addClientUser').and.callThrough();
                
                $httpBackend.expectPOST('/api/users/1').respond();

                result = mockUsersResource.addClientUser(
                {
                    clientId: 1,
                },
                    {}
                );

                $httpBackend.flush();
            }));
            
            it('should be defined as a function', inject(function (Users) {
                expect(typeof Users.addClientUser === 'function').toEqual(true);
            }));    
            
            it('should be called with the correct parameters', inject(function (Users) {
                expect(Users.addClientUser).toHaveBeenCalledWith(
                {
                    clientId: 1,
                },
                    {}
                );
            }));
            
            it('should respond with a promise', inject(function () {
                expect(typeof result.$promise === 'object').toEqual(true);
            }));
        });
                        
        /**
         * @action POST
         * @name Users.search
         * @path param integer int32 clientId 
         * @body param UserSearchParameterDto  userSearchParameterDto 
         */
        describe('search', function () {
            var result;
            
            beforeEach(inject(function(Users) {
                spyOn(Users, 'search').and.callThrough();
                
                $httpBackend.expectPOST('/api/users/1/search').respond();

                result = mockUsersResource.search(
                {
                    clientId: 1,
                },
                    {}
                );

                $httpBackend.flush();
            }));
            
            it('should be defined as a function', inject(function (Users) {
                expect(typeof Users.search === 'function').toEqual(true);
            }));    
            
            it('should be called with the correct parameters', inject(function (Users) {
                expect(Users.search).toHaveBeenCalledWith(
                {
                    clientId: 1,
                },
                    {}
                );
            }));
            
            it('should respond with a promise', inject(function () {
                expect(typeof result.$promise === 'object').toEqual(true);
            }));
        });
                        
        /**
         * @action GET
         * @name Users.get
         * @path param integer int32 userId 
         */
        describe('get', function () {
            var result;
            
            beforeEach(inject(function(Users) {
                spyOn(Users, 'get').and.callThrough();
                
                $httpBackend.expectGET('/api/users/1')
                    .respond(
                        {
                            data: 'test'
                        }
                    );

                result = mockUsersResource.get(
                {
                    userId: 1,
                }
                );

                $httpBackend.flush();
            }));
            
            it('should be defined as a function', inject(function (Users) {
                expect(typeof Users.get === 'function').toEqual(true);
            }));    
            
            it('should be called with the correct parameters', inject(function (Users) {
                expect(Users.get).toHaveBeenCalledWith(
                {
                    userId: 1,
                }
                );
            }));
            
            it('should respond with a promise containing data', inject(function () {
                expect(typeof result.$promise === 'object').toEqual(true);
                expect(result.data).toEqual('test');
            }));
        });
                        
        /**
         * @action PUT
         * @name Users.updateUser
         * @path param integer int32 userId 
         * @body param UserDisplayDto  userDto 
         */
        describe('updateUser', function () {
            var result;
            
            beforeEach(inject(function(Users) {
                spyOn(Users, 'updateUser').and.callThrough();
                
                $httpBackend.expectPUT('/api/users/1').respond();

                result = mockUsersResource.updateUser(
                {
                    userId: 1,
                },
                    {}
                );

                $httpBackend.flush();
            }));
            
            it('should be defined as a function', inject(function (Users) {
                expect(typeof Users.updateUser === 'function').toEqual(true);
            }));    
            
            it('should be called with the correct parameters', inject(function (Users) {
                expect(Users.updateUser).toHaveBeenCalledWith(
                {
                    userId: 1,
                },
                    {}
                );
            }));
            
            it('should respond with a promise', inject(function () {
                expect(typeof result.$promise === 'object').toEqual(true);
            }));
        });
                        
        /**
         * @action POST
         * @name Users.getAllUsers
         * @body param UserSearchParameterDto  userSearchParameterDto 
         */
        describe('getAllUsers', function () {
            var result;
            
            beforeEach(inject(function(Users) {
                spyOn(Users, 'getAllUsers').and.callThrough();
                
                $httpBackend.expectPOST('/api/users/search').respond();

                result = mockUsersResource.getAllUsers(

                    {}
                );

                $httpBackend.flush();
            }));
            
            it('should be defined as a function', inject(function (Users) {
                expect(typeof Users.getAllUsers === 'function').toEqual(true);
            }));    
            
            it('should be called with the correct parameters', inject(function (Users) {
                expect(Users.getAllUsers).toHaveBeenCalledWith(

                    {}
                );
            }));
            
            it('should respond with a promise', inject(function () {
                expect(typeof result.$promise === 'object').toEqual(true);
            }));
        });
    });
}());

