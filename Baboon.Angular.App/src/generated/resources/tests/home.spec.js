(function() {
    'use strict';
    describe('Home', function () {
        var mockHomeResource;
        var $httpBackend;
        beforeEach(angular.mock.module('angular-baboon'));

        beforeEach(function () {
            angular.mock.inject(function ($injector) {
                $httpBackend = $injector.get('$httpBackend');
                mockHomeResource = $injector.get('Home');
            });
        });
        
                        
        /**
         * @action GET
         * @name Home.getCards
         */
        describe('getCards', function () {
            var result;
            
            beforeEach(inject(function(Home) {
                spyOn(Home, 'getCards').and.callThrough();
                
                $httpBackend.expectGET('/api/home/cards')
                    .respond(
                        [{
                            data: 'test'
                        }]
                    );

                result = mockHomeResource.getCards();

                $httpBackend.flush();
            }));
            
            it('should be defined as a function', inject(function (Home) {
                expect(typeof Home.getCards === 'function').toEqual(true);
            }));    
            
            it('should be called with the correct parameters', inject(function (Home) {
                expect(Home.getCards).toHaveBeenCalledWith();
            }));
            
            it('should respond with a promise containing data', inject(function () {
                expect(typeof result.$promise === 'object').toEqual(true);
                expect(result[0].data).toEqual('test');
            }));
        });
    });
}());

