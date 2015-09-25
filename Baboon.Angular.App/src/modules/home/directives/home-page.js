(function () {
    'use strict';

    angular
        .module('angular-baboon.home.home-page', [])
        .directive('dtHomePage', dtHomePage);

    function dtHomePage() {

        var directive = {
            controller: HomePageController,
            controllerAs: 'homePage',
            templateUrl: 'modules/home/templates/home-page.tpl.html',
            restrict: 'E',
            replace: true
        };

        HomePageController.$inject = ['$log'];

        function HomePageController($log) {

            var scope = this;

           scope.title = 'Hello World';

            /* IMPLEMENTATIONS */

        }

        return directive;
    }
})();