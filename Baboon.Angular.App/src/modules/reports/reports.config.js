(function () {
    'use strict';

    angular.module('angular-baboon')
        .config(function ($stateProvider) {

            $stateProvider
                .state('reports', {
                    abstract: true,
                    url: '/reports',
                    template: '<ui-view/>', //abstract states need a <ui-view/> for their child states to plug into.
                    data: {
                        title: 'Reports',
                        state: 'reports.index'
                    }
                });

        });

})();