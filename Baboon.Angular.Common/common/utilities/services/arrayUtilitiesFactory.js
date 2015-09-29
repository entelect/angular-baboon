(function () {
    'use strict';
    // factory
    angular
        .module('angular-baboon.common.utilities.array',[])
        .factory('arrayUtilities', ArrayUtilities);

    ArrayUtilities.$inject = [];

    function ArrayUtilities() {

        var service = {
            clear: clear,
            copyInto: copyInto,
            isArray: isArray
        };

        return service;

        /* Implementations */

        function clear(array) {
            while (array.length > 0) {
                array.pop();
            }
        }
        
        function copyInto(source, destination) {
            for(var i = 0; i < source.length; i++){
                destination.push(source[i]);
            }
        }
        
        function isArray(array) {
            if(array !== undefined && array !== null){
                return array.length !== undefined;
            }
            return false;
        }

    }
})();