(function () {
    'use strict';

    angular
        .module('reports.viewer.report-viewer', [])
        .directive('dtReportViewer', reportViewer);

    function reportViewer() {

        var directive = {
            controller: ReportViewer,
            controllerAs: 'reportViewer',
            templateUrl: 'app/modules/reports/viewer/templates/report-viewer.tpl.html',
            restrict: 'EA'
        };


        ReportViewer.$inject = ['$log', '$scope', '$stateParams', '$sce', '$window', 'Reports','appEnvironment', 'authentication'];

        function ReportViewer($log, $scope, $stateParams, $sce, $window, Reports, appEnvironment, authentication) {

            var scope = this;

            scope.report = Reports.get({
                reportId: $stateParams.reportId
            });

            scope.heightOffset = 300;
            scope.height = $window.innerHeight - scope.heightOffset;
            
            scope.currentUser = authentication.getCurrentUser();

            /* IMPLEMENTATIONS */

            scope.report.$promise.then(function () {
                scope.externalLink = $sce.trustAsResourceUrl(appEnvironment.serverBase+'ASPX/Reports/ReportForm.aspx?ReportId=' + scope.report.reportId+ '&UserId='+scope.currentUser.userId+'&ClientId='+scope.currentUser.clientId);
            });

            angular.element($window).bind('resize', function () {
                scope.height = $window.innerHeight - scope.heightOffset;
                return $scope.$apply();
            });

        }

        return directive;
    }
})();