(function () {
    'use strict';
    // factory
    angular
        .module('angular-baboon.common.authentication.basic.factory', [])
        .factory('authentication', Authentication);

    Authentication.$inject = ['$log', '$state', 'Account', 'heartbeat', 'localStorageService', 'toaster'];

    function Authentication($log, $state, Account, heartbeat, localStorageService, toaster) {
        var isLoggedInState = false;
        var currentUser = null;
        var currentUserStorageKey = 'currentUser';

        var service = {
            login: login,
            logout: logout,
            unauthorizedRequest: unauthorizedRequest,
            getCurrentUser: getCurrentUser,
            isLoggedIn: isLoggedIn,
            getUserNavMenu: getUserNavMenu
        };

        init();

        return service;

        /* Implementations */

        function init() {
            if (localStorageService.isSupported) {
                var localStorageCurrentUser = localStorageService.get(currentUserStorageKey);

                /*
				We are using forms auth on the server side.
				Having a user in local storage DOES NOT imply that the user is logged in as the cookie may have expired
				eg log in, close tab, wait for 60 min (cookie is now expired), open tab again
					the heartbeart was not active so no cookie refresh occured
					also take into consieration when one resets a password. 
				*/
                if (localStorageCurrentUser !== null) {
                    currentUser = localStorageCurrentUser;
                    isLoggedInState = true;
                    heartbeat.poke();
                    heartbeat.start();
                }
            }
        }

        function login(loginCredentials) {
            var promise = Account.login(loginCredentials);

            promise.$promise.then(function (data) {
                isLoggedInState = true;
                currentUser = data;
                var isKeySet = localStorageService.set(currentUserStorageKey, data);
                if (!isKeySet) {
                    toaster.warning('Browser local storage not available', 'User session not stored.');
                }
            })
                .then(function () {
                    heartbeat.start();
                    $state.go('home');
                });

            return promise;
        }

        function logout() {
            var promise = Account.logout();

            promise.$promise.then(function () {
                var isKeyRemoved = localStorageService.remove(currentUserStorageKey);
                if (isKeyRemoved) {
                    resetState();
                } else {
                    isLoggedInState = true;
                    toaster.warning('Browser local storage not available', 'User session not stored.');
                }
            })
                .then(function () {
                    heartbeat.stop();
                }).then(function () {
                    isLoggedInState = false;
                    $state.go('home');
                });

            return promise;
        }

        function unauthorizedRequest() {
            heartbeat.stop();
            var isKeyRemoved = localStorageService.remove(currentUserStorageKey);

            if (isKeyRemoved) {
                resetState();
            }

            $log.warn('User not logged in. Current state: ' + $state.current.name);

            if ($state.current.name.indexOf('account') < 0) {
                toaster.warning('Your previous session has been closed. Please log in again.', 'Authentication');
                $state.go('home');
            }

        }

        function resetState() {
            isLoggedInState = false;
            currentUser = null;
        }

        function getCurrentUser() {
            return currentUser;
        }

        function isLoggedIn() {
            return isLoggedInState;
        }

        function getUserNavMenu() {
            return Account.getUserNavMenu();
        }

    }
})();