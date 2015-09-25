(function () {
    'use strict';

    angular.module('angular-baboon')
        .config(function ($stateProvider, $sceDelegateProvider) {

        $stateProvider
            .state('reports.viewer', {
            url: '/:reportId/view',
            template: '<dt-report-viewer>test</dt-report-viewer>',
            resolve: {
                breadCrumb: function ($stateParams, Breadcrumb) {
                    return Breadcrumb.getReportName({
                        reportId: $stateParams.reportId
                    });
                }
            },
            data: {
                title: '{{breadCrumb.title}}',
                state: 'reports.viewer'
            }
        });

        $sceDelegateProvider.resourceUrlWhitelist([
            'self' // trust all resources from the same origin
            //'*://essqlreports/**' // trust all resources from `essqlreports`
        ]);
    });

})();