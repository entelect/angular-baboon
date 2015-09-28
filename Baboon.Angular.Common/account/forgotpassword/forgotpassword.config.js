(function () {
    'use strict';

    angular.module('angular-baboon.common.account.forgotpassword')
        .config(function ($stateProvider) {

            $stateProvider
                .state('account.forgot-password', {
                    url: '/forgotpassword',
                    template: '<dt-forgot-password></dt-forgot-password>',
                    data: {
                        title: 'Forgotten Password',
                        state: 'account.forgot-password'
                    }
                })
                .state('account.activate-account', {
                    url: '/activate/:guid',
                    template: '<dt-activate-account></dt-activate-account>',
                    data: {
                        title: 'Activation',
                        state: 'account.activate-account'
                    }
                })

            .state('account.reset-password', {
                url: '/resetpassword/:guid',
                template: '<dt-activate-account state="resetpassword"></dt-activate-account>',
                data: {
                    title: 'Password Reset',
                    state: 'account.reset-password'
                }
            });

        });

})();