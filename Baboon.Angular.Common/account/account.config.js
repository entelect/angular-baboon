(function () {
    'use strict';

    angular.module('angular-baboon.common.account')
        .config(function ($stateProvider) {

            $stateProvider
                .state('account', {
                    abstract: true,
                    url: '/account',
                    template: '<ui-view/>', //abstract states need a <ui-view/> for their child states to plug into.
                    data: {
                        title: 'Account',
                        state: 'home'
                    }
                });

        });

})();