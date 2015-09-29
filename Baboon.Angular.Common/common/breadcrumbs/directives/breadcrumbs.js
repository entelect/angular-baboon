(function () {
    'use strict';

    angular
        .module('angular-baboon.common.breadcrumbs')
        .directive('breadcrumbs', breadcrumbs);

    function breadcrumbs() {

        var directive = {
            controller: BreadcrumbsController,
            controllerAs: 'breadcrumbs',
            templateUrl: 'breadcrumbs/templates/breadcrumbs.tpl.html',
            restrict: 'EA'
        };

        BreadcrumbsController.$inject = ['$log', '$scope', '$state', '$stateParams', '$interpolate'];

        function BreadcrumbsController($log, $scope, $state, $stateParams, $interpolate) {

            var scope = this;
            scope.setNavigationState = setNavigationState;
            scope.isCurrent = isCurrent;
            scope.capitaliseFirstLetter = capitaliseFirstLetter;
            scope.stateParams = $stateParams;

            $scope.$on('$stateChangeSuccess', function () {
                setNavigationState();
            });

            setNavigationState();

            /* Implementations */

            function setNavigationState() {
                scope.navigationState = {
                    currentState: $state.$current,
                    params: $stateParams,
                    getDisplayName: function (state) {
                        return $interpolate(state.data.title)(state.locals.globals);
                    },
                    isCurrent: function (state) {
                        return isCurrent(state);
                    }
                };
            }

            function isCurrent(state) {
                return $state.$current.name === state.name;
            }

            function capitaliseFirstLetter(string) {
                return string.charAt(0).toUpperCase() + string.slice(1);
            }

        }
        return directive;
    }
})();