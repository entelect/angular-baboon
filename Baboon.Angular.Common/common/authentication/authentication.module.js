(function () {
	'use strict';
			/*
			
			Choose either basic or JWT authentication.
			
			Note that the 'authentication service' will have different features exposed depending on which authentication you choose.
			
			*/
	angular.module('angular-baboon.common.authentication', [

		'angular-baboon.common.authentication.jwt',
		//'angular-baboon.common.authentication.basic'
	]);

})();
