(function () {
    'use strict';

    angular
        .module('angular-baboon.common.spinners.table-spinner', [])
        .directive('tableSpinner', tableSpinner);

    function tableSpinner() {

        var directive = {
            link: link,
            restrict: 'A',
            scope: {
                tableSpinnerColspan: '='
            }
        };

        function link(scope, element) {

            var tableElement = element[0];

            var spinnerRow = '<tr class="table-spinner"><td style="border:none; padding: 0px;" colspan="' + scope.tableSpinnerColspan + '"><center ng-show="tableSpinner.spin"><i class="fa fa-2x fa-spinner fa-spin"></i></center></td></tr>';

            scope.$on('spinner-request-started', addSpinner);
            scope.$on('spinner-request-completed', removeSpinner);
            
            /* IMPLEMENTATIONS */

            function addSpinner() {
                var hasSpinner = false;

                var rows = angular.element(tableElement).children();

                for (var i = 0; i < rows.length; i++) {
                    if (angular.element(rows[i]).hasClass('table-spinner')) {
                        hasSpinner = true;
                    }

                }

                if (!hasSpinner) {
                    angular.element(tableElement).append(spinnerRow);
                }
            }

            function removeSpinner() {
                var rows = angular.element(tableElement).children();
                for (var i = 0; i < rows.length; i++) {

                    if (angular.element(rows[i]).hasClass('table-spinner')) {
                        angular.element(rows[i]).remove();
                    }

                }
            }

        }

        return directive;
    }
})();