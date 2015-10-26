(function () {
	'use strict';

	angular.module('angular-baboon.common.authentication.basic', [
		'angular-baboon.common.authentication.basic.factory',
		'angular-baboon.common.authentication.basic.interceptor',
		'angular-baboon.common.authentication.basic.heartbeat'
	]);

})();
