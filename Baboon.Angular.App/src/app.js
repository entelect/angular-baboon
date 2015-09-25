(function () {
	'use strict';

	angular.module('angular-baboon')

		.run(['$rootScope', '$state', '$interpolate', function ($rootScope, $state, $interpolate) {
			$rootScope.$state = $state;
			$rootScope.pageTitle = 'Entelect';
			$rootScope.$on('$stateChangeSuccess', function () {
				var state = $rootScope.$state.$current;
				if (state.data && state.data.title) {
					if (state.locals.globals.breadCrumb) {
						state.locals.globals.breadCrumb.$promise.then(function () {
							$rootScope.pageTitle = $interpolate(state.data.title)(state.locals.globals) + ' | Entelect';
						});
					} else {
						$rootScope.pageTitle = state.data.title + ' | Entelect';
					}
				} else {
					$rootScope.pageTitle = 'Entelect';
				}
			});
		}])

		.controller('AppCtrl', AppController);

	function AppController($log) {
		var scope = this;
		scope.currentDate = Date.now();
		scope.logStartUpMessage = logStartUpMessage;
		scope.message = 'Angular-Baboon application logging in debug mode';

		scope.logStartUpMessage();

		/* Implementations */

		function logStartUpMessage() {
			$log.debug(scope.message);
		}
	}

})();
