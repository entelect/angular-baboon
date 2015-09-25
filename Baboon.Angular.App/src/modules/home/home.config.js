(function () {
    'use strict';

    angular
        .module('angular-baboon.home')
        .config(routeConfig);

    routeConfig.$inject = ['$stateProvider'];

    function routeConfig($stateProvider) {

        $stateProvider
            .state('home', {
                url: '/home',
                template: '<dt-home-page></dt-home-page>',
                data: {
                    title: 'Home',
                    state: 'home'
                }
            });

    }

})();