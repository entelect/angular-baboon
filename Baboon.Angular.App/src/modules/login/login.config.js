(function () {
    'use strict';

    angular
        .module('angular-baboon.login')
        .config(routeConfig);

    routeConfig.$inject = ['$stateProvider'];

    function routeConfig($stateProvider) {

        $stateProvider
            .state('login', {
                url: '/login',
                views: {
                    'main': {
                        templateUrl: 'modules/login/templates/login.tpl.html',
                    }
                },
                data: {
                    title: 'Login',
                    state: 'login'
                }
            });
    }

})();