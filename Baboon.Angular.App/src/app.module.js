(function () {
  'use strict';

  angular.module('angular-baboon', [
    'angular-baboon.vendors',
    // all vendor/bower module defined above
    
    // all app modules define below 
    'templates',
    'angular-baboon.common',
    'angular-baboon.reports',
    'angular-baboon.home'
  ]);

})();
