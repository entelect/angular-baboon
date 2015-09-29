(function () {
    'use strict';

    angular
        .module('angular-baboon.common.account.forgotpassword.forgotpassword', [])
        .directive('dtForgotPassword', forgotPassword);

    function forgotPassword() {

        var directive = {
            controller: ForgotPassword,
            controllerAs: 'forgotPassword',
            templateUrl: 'common/account/forgotpassword/templates/forgotpassword.tpl.html',
            restrict: 'EA'
        };

        
        ForgotPassword.$inject = ['$log', '$scope', '$state', '$stateParams', 'Account', 'toaster'];

        function ForgotPassword($log, $scope, $state, $stateParams, Account, toaster) {
            var scope = this;
            scope.showForm = true;
            scope.requestNewPassword = requestNewPassword;
             scope.forgotPasswordCredentials = {
                email: null
            };
                        
            /* Implementations */
            function requestNewPassword(){
                var forgotPasswordPromise = Account.forgotPassword(scope.forgotPasswordCredentials);
                forgotPasswordPromise.$promise.then(function(){
                    scope.showForm = false;
                },
                function (result) {
                    toaster.error(result.data.message, 'Error');
                }); 
                
            }
        }

        return directive;
    }
})();