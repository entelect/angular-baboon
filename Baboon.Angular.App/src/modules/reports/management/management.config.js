(function () {
    'use strict';

    angular.module('angular-baboon')
        .config(function ($stateProvider) {

            $stateProvider
                .state('reports.index', {
                    url: '/index',
                    template: '<dt-reports-index></dt-reports-index>',
                    data: {
                        title: 'Index',
                        state: 'reports.index'
                    }
                });
        });

})();