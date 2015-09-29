(function () {
    'use strict';

    angular
        .module('angular-baboon.common.spinners.request-spinner',[])
        .directive('requestSpinner', requestSpinner);

    function requestSpinner() {

        var directive = {
            link: link,
            restrict: 'A'
        };


        function link(scope, element) {
            
            var spinnerElement = element[0];
            
            var iconElement = angular.element(spinnerElement).find('i');

            scope.$on('spinner-request-started', function () {
                angular.element(spinnerElement).attr('disabled', 'true');
                angular.element(iconElement).addClass('fa-spinner fa-spin');
            });

            scope.$on('spinner-request-completed', function () {
                angular.element(iconElement).removeClass('fa-spin');
                angular.element(iconElement).removeClass('fa-spinner');
                angular.element(spinnerElement).removeAttr('disabled');
            });

        }

        return directive;
    }
})();