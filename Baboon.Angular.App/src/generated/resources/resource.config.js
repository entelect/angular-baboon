(function() {
	'use strict';
	angular.module('angular-baboon')
	.provider('resourceConfig', function resourceConfigProvider() {
		this.config ={
			serverBase: 'http://client.baboon.local/',
			debug: true
		};

		this.$get = function (){
			return this.config;
		};
	});

}());