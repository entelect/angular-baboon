(function () {
    'use strict';

    angular
        .module('angular-baboon.common.pager', [])
        .directive('dtPager', pager)
        .filter('totalPages', totalPages);

    function pager() {

        var directive = {
            controller: Pager,
            controllerAs: 'pager',
            templateUrl: 'pager/templates/pager.tpl.html',
            restrict: 'E',
            scope: {
                getPagedDataAsync: '=pagingFunction',
                pagingOptions: '='

            }
        };

        Pager.$inject = ['$scope'];

        function Pager($scope) {
            var scope = this;

            scope.pagingOptions = {
                pageSizes: [10, 20, 500],
                pageSize: 10,
                totalItems: 0,
                currentPage: 1
            };
            

            angular.extend(scope.pagingOptions, $scope.pagingOptions);

            $scope.pagingOptions = scope.pagingOptions;

        }
        return directive;
    }

    function totalPages() {
        return function (number) {
            return Math.ceil(number);
        };
    }

})();