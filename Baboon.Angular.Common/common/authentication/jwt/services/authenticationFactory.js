(function () {
    'use strict';
    // factory
    angular
        .module('angular-baboon.common.authentication.jwt.factory', [])
        .factory('authentication', Authentication);

    Authentication.$inject = ['$log', '$q', '$http', '$state', 'resourceConfig', 'localStorageService', 'Account', 'toaster'];

    function Authentication($log, $q, $http, $state, resourceConfig, localStorageService, Account, toaster) {
        var isLoggedInState = false;
        var currentUser = null;
        var currentUserStorageKey = 'currentUser';
        var authorizationDataStorageKey = 'authorizationData';

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
                var localStorageAuthorizationData = localStorageService.get(authorizationDataStorageKey);
                /*
				Having a user in local storage DOES NOT imply that the user 's token is still valid.
				*/
                if (localStorageCurrentUser && localStorageAuthorizationData) {
                    currentUser = localStorageCurrentUser;
                    isLoggedInState = true;
                }
            }
        }

        function login(loginCredentials) {
            var data = "grant_type=password&username=" + loginCredentials.userName + "&password=" + loginCredentials.password;

            var deferred = $q.defer();

            $http.post(resourceConfig.serverName + '/api/oauth/token', data, { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }).success(function (response) {

                var isKeySet = localStorageService.set(authorizationDataStorageKey, { token: response.access_token, userName: loginCredentials.userName, refreshToken: "", useRefreshTokens: false });
                if (!isKeySet) {
                    toaster.warning('Browser local storage not available.', 'Warning');
                }
                isLoggedInState = true;

                currentUser = Account.getCurrentUser();

                currentUser.$promise.then(function () {
                    deferred.resolve(response);
                }, function (err) {
                    deferred.reject(err)
                })

            }).error(function (err, status) {
                logout();
                deferred.reject(err);
            });

            return deferred.promise;
        }

        function logout() {
            var deferred = $q.defer();

            var isCurrentUserKeyRemoved = localStorageService.remove(currentUserStorageKey);
            var isAuthorizationDataKeyRemoved = localStorageService.remove(authorizationDataStorageKey);

            if (isCurrentUserKeyRemoved && isAuthorizationDataKeyRemoved) {
                resetState();
                deferred.resolve();
            } else {
                toaster.warning('Your session was not cleanly removed from your browser storage.', 'Warning');
                deferred.reject();
            }
            return deferred.promise;
        }

        function unauthorizedRequest() {
            var isAuthorizationDataKeyRemoved = localStorageService.remove(authorizationDataStorageKey);
            var isCurrentUserKeyRemoved = localStorageService.remove(currentUserStorageKey);

            if (isCurrentUserKeyRemoved && isAuthorizationDataKeyRemoved) {
                resetState();
            }

            $log.warn('User not logged in. Current state: ' + $state.current.name);
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