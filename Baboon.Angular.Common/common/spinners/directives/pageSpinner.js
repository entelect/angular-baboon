(function () {
    'use strict';

    angular
        .module('angular-baboon.common.spinners.page-spinner', [])
        .directive('pageSpinner', tableSpinner);

    function tableSpinner() {

        var directive = {
            link: link,
            restrict: 'E',
            templateUrl: 'common/spinners/templates/page-spinner.tpl.html',
            scope: {
                spin: '='
            }
        };

        function link(scope, element) {

          

        }

        return directive;
    }
})();