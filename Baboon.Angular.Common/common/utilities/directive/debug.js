(function () {
        'use strict';

        angular
            .module('angular-baboon.common.utilities.debug', [])
            .directive('debug', datePicker);

        function datePicker() {

            var directive = {
                link: link,
                templateUrl: 'common/utilities/templates/debug.tpl.html',
                restrict: 'EA',
                scope: {
                    ngModel: '=',
                }
            };

            function link(scope, element, attrs) {
                scope.open = function ($event) {
                    $event.preventDefault();
                    $event.stopPropagation();
                    scope.opened = true;
                };
                
                scope.toggle = false;
                scope.varName = attrs.ngModel;
            }
            return directive;
        }
})();