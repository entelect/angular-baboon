(function() {
    'use strict';
    describe('HeartBeat', function () {
        var mockHeartBeatResource;
        var $httpBackend;
        beforeEach(angular.mock.module('angular-baboon'));

        beforeEach(function () {
            angular.mock.inject(function ($injector) {
                $httpBackend = $injector.get('$httpBackend');
                mockHeartBeatResource = $injector.get('HeartBeat');
            });
        });
        
                        
        /**
         * @action GET
         * @name HeartBeat.get
         */
        describe('get', function () {
            var result;
            
            beforeEach(inject(function(HeartBeat) {
                spyOn(HeartBeat, 'get').and.callThrough();
                
                $httpBackend.expectGET('/api/heartbeat')
                    .respond(
                        [{
                            data: 'test'
                        }]
                    );

                result = mockHeartBeatResource.get();

                $httpBackend.flush();
            }));
            
            it('should be defined as a function', inject(function (HeartBeat) {
                expect(typeof HeartBeat.get === 'function').toEqual(true);
            }));    
            
            it('should be called with the correct parameters', inject(function (HeartBeat) {
                expect(HeartBeat.get).toHaveBeenCalledWith();
            }));
            
            it('should respond with a promise containing data', inject(function () {
                expect(typeof result.$promise === 'object').toEqual(true);
                expect(result[0].data).toEqual('test');
            }));
        });
    });
}());

