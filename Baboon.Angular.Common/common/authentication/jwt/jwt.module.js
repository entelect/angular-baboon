(function () {
	'use strict';

	angular.module('angular-baboon.common.authentication.jwt', [
		'angular-baboon.common.authentication.jwt.factory',
		'angular-baboon.common.jwt-authentication.interceptor'
	]);

})();
