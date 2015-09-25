(function () {
    'use strict';

    angular
        .module('angular-baboon.common.navbar')
        .directive('navbar', navbar);

    function navbar() {

        var directive = {
            controller: NavbarController,
            controllerAs: 'navbar',
            templateUrl: 'navbar/templates/navbar.tpl.html',
            restrict: 'EA'
        };

        NavbarController.$inject = ['$log', '$scope', '$state', '$stateParams', 'authentication', 'toaster', 'resourceConfig'];

        function NavbarController($log, $scope, $state, $stateParams, authentication, toaster, resourceConfig) {

            var scope = this;

            scope.leftLinks = [];
            scope.loggingIn = false;
            scope.currentUser = null;
            scope.isClientPortal = false;
            scope.isCurrent = isCurrent;
            scope.goToState = goToState;
            scope.login = login;
            scope.logout = logout;
            scope.isLoggedIn = false;
            scope.isCollapsed = true;
            scope.loginCredentials = {
                email: null,
                password: null
            };

            init();

            /* IMPLEMENTATIONS */

            function isCurrent(link) {
                return $state.$current.name.substring(0, $state.$current.name.indexOf('.')) === link.state.substring(0, link.state.indexOf('.'));
            }

            function goToState(state) {
                $state.go(state);
            }

            function login() {
                scope.loggingIn = true;
                var loginPromise = authentication.login(scope.loginCredentials);

                loginPromise.$promise.then(function () {
                    updateNavBarState();
                    updateNavBarMenus();
                    toaster.success('Welcome back ' + scope.currentUser.firstName + '.', 'Login Successful');
                    scope.loggingIn = false;
                },
                    function (request) {
                        if (request.status !== 401) {
                            toaster.error('Incorrect username or password', 'Login Error');
                        }
                        scope.loggingIn = false;
                    });


            }

            function logout() {
                var logoutPromise = authentication.logout();
                logoutPromise.$promise.then(function () {
                    toaster.info('Bye!', 'Logout Successful');
                    updateNavBarState();
                    clearNavMenu();
                },
                    function () {
                        toaster.error('Failed to log out', 'Logout Error');
                    });
                updateNavBarState();
            }

            function updateNavBarState() {
                scope.isLoggedIn = authentication.isLoggedIn();
                scope.currentUser = authentication.getCurrentUser();
            }

            function updateNavBarMenus() {
                var navMenuPromise = authentication.getUserNavMenu();
                navMenuPromise.$promise.then(function (data) {
                    clearNavMenu();
                    for (var i = 0; i < data.length; i++) {
                        scope.leftLinks.push(data[i]);
                    }
                });
            }

            function clearNavMenu() {
                while (scope.leftLinks.length > 0) {
                    scope.leftLinks.pop();
                }
            }

            function init() {
                if (resourceConfig.serverBase.indexOf('client') >= 0) {
                    scope.isClientPortal = true;
                }
                updateNavBarState();

                if (scope.isLoggedIn) {
                    updateNavBarMenus();
                }

                $scope.$on('unauthorized-request', function () {
                    updateNavBarState();
                });
            }



        }

        return directive;
    }
})();