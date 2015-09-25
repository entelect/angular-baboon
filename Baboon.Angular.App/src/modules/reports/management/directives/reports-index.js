(function () {
    'use strict';

    angular
        .module('reports.management.reports-index', [])
        .directive('dtReportsIndex', reportsIndex);

    function reportsIndex() {

        var directive = {
            controller: ReportsIndex,
            controllerAs: 'reportsIndex',
            templateUrl: 'app/modules/reports/management/templates/reports-index.tpl.html',
            restrict: 'EA'
        };


        ReportsIndex.$inject = ['$log', '$state', 'Reports', '$location', '$anchorScroll'];

        function ReportsIndex($log, $state, Reports, $location, $anchorScroll) {

            var scope = this;

            scope.getPagedDataAsync = getPagedDataAsync;
            scope.pagingOptions = {};
            scope.reset = reset;
            scope.create = create;

            /* IMPLEMENTATIONS */

            function reset() {
                scope.searchText = '';
                scope.getPagedDataAsync();
            }

            function create() {
                $state.go('reports.create');
            }

            function getPagedDataAsync() {
                search(scope.searchText, scope.pagingOptions);
            }

            function search(searchText, pagingOptions) {
                var searchParameters = {};

                if (searchText) {
                    searchParameters.searchText = searchText;
                }

                if (pagingOptions) {
                    searchParameters.pageSize = pagingOptions.pageSize;
                    searchParameters.currentPage = pagingOptions.currentPage;
                }

                scope.currentPage = Reports.search(searchParameters);

                scope.currentPage.$promise.then(function (data) {
                    scope.availableReports = data.results;
                    scope.pagingOptions.totalItems = data.totalItems;
                    scope.pagingOptions.currentPage = data.currentPage;

                    $location.hash('top');
                    $anchorScroll();
                });
            }

            getPagedDataAsync();
        }

        return directive;
    }
})();