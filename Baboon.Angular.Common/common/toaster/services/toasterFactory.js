(function () {
    'use strict';
    // factory
    angular
        .module('angular-baboon.common.toaster')
        .factory('toaster', Toaster);

    Toaster.$inject = ['$log', 'toastr'];

    function Toaster($log, toastr) {

        var service = {
            info: info,
            success: success,
            warning: warning,
            error: error
        };

        return service;

        /* Implementations */
        
        function info(message,title) {
            toastr.info(message,title);
        }
        
        function success(message,title) {
            toastr.success(message,title);
        }
        
        function warning(message,title) {
            toastr.warning(message,title);
        }
        
        function error(message,title) {
            toastr.error(message,title);
        }

    }
})();