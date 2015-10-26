(function () {
    'use strict';

    angular
        .module('angular-baboon.login.controller', [])
        .controller('LoginController', LoginController);

    LoginController.$inject = ['$log', 'authentication', 'toaster'];

    function LoginController($log, authentication, toaster) {

        var scope = this;

        scope.loginCredentials = {}
        scope.submit = submit;

        /* IMPLEMENTATIONS */

        function submit() {
            authentication.login(scope.loginCredentials)
            .then(function(){
                toaster.success('Logged in','Success');
            }, function(error){
                $log.error(error);
                //toaster.error
            });
        }
    }
})();