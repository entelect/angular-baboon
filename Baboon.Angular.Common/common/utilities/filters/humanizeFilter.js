(function () {
    'use strict';
    // Filter
    angular
        .module('angular-baboon.common.utilities.human-filters',[])
        .filter('humanize', humanizeFilter);

    function humanizeFilter() {
        return function (text) {
            if (text) {
                text = text.toLowerCase();
                // Use regexp to find first letters after a word boundary (anything that is not a letter using \b) and replace them with an uppercase version. 
                text = text.replace(/\b[a-z]|\(([a-zA-Z]{1,3})\)/g, function(firstletter) {
                    return firstletter.toUpperCase(); } );
               return text;
            }
        };
    }
})();