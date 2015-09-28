(function() {
    'use strict';
    describe('Reports', function () {
        var mockReportsResource;
        var $httpBackend;
        beforeEach(angular.mock.module('angular-baboon'));

        beforeEach(function () {
            angular.mock.inject(function ($injector) {
                $httpBackend = $injector.get('$httpBackend');
                mockReportsResource = $injector.get('Reports');
            });
        });
        
                        
        /**
         * @action GET
         * @name Reports.getAll
         */
        describe('getAll', function () {
            var result;
            
            beforeEach(inject(function(Reports) {
                spyOn(Reports, 'getAll').and.callThrough();
                
                $httpBackend.expectGET('/api/reports')
                    .respond(
                        [{
                            data: 'test'
                        }]
                    );

                result = mockReportsResource.getAll();

                $httpBackend.flush();
            }));
            
            it('should be defined as a function', inject(function (Reports) {
                expect(typeof Reports.getAll === 'function').toEqual(true);
            }));    
            
            it('should be called with the correct parameters', inject(function (Reports) {
                expect(Reports.getAll).toHaveBeenCalledWith();
            }));
            
            it('should respond with a promise containing data', inject(function () {
                expect(typeof result.$promise === 'object').toEqual(true);
                expect(result[0].data).toEqual('test');
            }));
        });
                        
        /**
         * @action POST
         * @name Reports.createReport
         * @body param ReportDto  reportDto 
         */
        describe('createReport', function () {
            var result;
            
            beforeEach(inject(function(Reports) {
                spyOn(Reports, 'createReport').and.callThrough();
                
                $httpBackend.expectPOST('/api/reports').respond();

                result = mockReportsResource.createReport(

                    {}
                );

                $httpBackend.flush();
            }));
            
            it('should be defined as a function', inject(function (Reports) {
                expect(typeof Reports.createReport === 'function').toEqual(true);
            }));    
            
            it('should be called with the correct parameters', inject(function (Reports) {
                expect(Reports.createReport).toHaveBeenCalledWith(

                    {}
                );
            }));
            
            it('should respond with a promise', inject(function () {
                expect(typeof result.$promise === 'object').toEqual(true);
            }));
        });
                        
        /**
         * @action GET
         * @name Reports.get
         * @path param integer int32 reportId 
         */
        describe('get', function () {
            var result;
            
            beforeEach(inject(function(Reports) {
                spyOn(Reports, 'get').and.callThrough();
                
                $httpBackend.expectGET('/api/reports/1')
                    .respond(
                        {
                            data: 'test'
                        }
                    );

                result = mockReportsResource.get(
                {
                    reportId: 1,
                }
                );

                $httpBackend.flush();
            }));
            
            it('should be defined as a function', inject(function (Reports) {
                expect(typeof Reports.get === 'function').toEqual(true);
            }));    
            
            it('should be called with the correct parameters', inject(function (Reports) {
                expect(Reports.get).toHaveBeenCalledWith(
                {
                    reportId: 1,
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
         * @name Reports.updateRDLLink
         * @body param ReportDto  reportDto 
         * @path param string  reportId 
         */
        describe('updateRDLLink', function () {
            var result;
            
            beforeEach(inject(function(Reports) {
                spyOn(Reports, 'updateRDLLink').and.callThrough();
                
                $httpBackend.expectPUT('/api/reports/test').respond();

                result = mockReportsResource.updateRDLLink(
                {
                    reportId: 'test',
                },
                    {}
                );

                $httpBackend.flush();
            }));
            
            it('should be defined as a function', inject(function (Reports) {
                expect(typeof Reports.updateRDLLink === 'function').toEqual(true);
            }));    
            
            it('should be called with the correct parameters', inject(function (Reports) {
                expect(Reports.updateRDLLink).toHaveBeenCalledWith(
                {
                    reportId: 'test',
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
         * @name Reports.search
         * @body param ReportSearchParamterDto  reportSearchParamter 
         */
        describe('search', function () {
            var result;
            
            beforeEach(inject(function(Reports) {
                spyOn(Reports, 'search').and.callThrough();
                
                $httpBackend.expectPOST('/api/reports/search').respond();

                result = mockReportsResource.search(

                    {}
                );

                $httpBackend.flush();
            }));
            
            it('should be defined as a function', inject(function (Reports) {
                expect(typeof Reports.search === 'function').toEqual(true);
            }));    
            
            it('should be called with the correct parameters', inject(function (Reports) {
                expect(Reports.search).toHaveBeenCalledWith(

                    {}
                );
            }));
            
            it('should respond with a promise', inject(function () {
                expect(typeof result.$promise === 'object').toEqual(true);
            }));
        });
    });
}());

