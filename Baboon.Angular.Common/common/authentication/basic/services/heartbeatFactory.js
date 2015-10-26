(function () {
    'use strict';
    // factory
    angular
        .module('angular-baboon.common.authentication.basic.heartbeat',[])
        .factory('heartbeat', Heartbeat);

    Heartbeat.$inject = ['$timeout', 'HeartBeat'];

    function Heartbeat($timeout, HeartBeat) {
        var heartbeatActive = false;
        var heartBeatPeriod = 600000; //1800000 is 30 mins

        var service = {
            heartBeatPeriod: heartBeatPeriod,
            start: start,
            stop: stop,
            poke: poke
        };
        
        beat();

        return service;

        /* Implementations */

        function beat() {
            if (heartbeatActive) {
                HeartBeat.get();
            }
            $timeout(beat, heartBeatPeriod);
        }

        function start() {
            heartbeatActive = true;
        }

        function stop() {
            heartbeatActive = false;
        }
        
        function poke(){
            return HeartBeat.get();
        }

    }
})();