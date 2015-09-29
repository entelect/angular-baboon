(function () {
    'use strict';
    // factory
    angular
        .module('angular-baboon.common.utilities.download', [])
        .factory('downloadUtilities', DownloadUtilities);

    DownloadUtilities.$inject = ['$window', '$q', '$log', '$timeout'];

    function DownloadUtilities($window, $q, $log, $timeout) {

        var downloadTabPollingPeriod = 1000; //ms
        var activeDownload = false;
        var downloadTab = null;
        var downloadPromise = null;

        var service = {
            download: download
        };

        return service;

        /* Implementations */

        function download(url, messageHtml) {
            var newDownloadPromise = $q.defer();

            if (activeDownload) {
                return rejectDownload(newDownloadPromise, 'Download already in progress');
            }

            if (url === null || url === undefined) {
                return rejectDownload(newDownloadPromise, 'Invalid download url: ' + url);
            }

            if (messageHtml === null || messageHtml === undefined) {
                return rejectDownload(newDownloadPromise, 'Invalid message html: ' + url);
            }

            activeDownload = true;
            downloadPromise = newDownloadPromise;

            downloadTab = $window.open(url, '_blank');

            if (downloadTab === null || downloadTab === undefined) {
                //IE returns null when in Enable Protected Mode  (╯°□°）╯︵ ┻━┻
                downloadPromise.resolve();
            } else {
                downloadTab = fixForIE(downloadTab);
                downloadTab.document.body.innerHTML = messageHtml;
                pollDownloadTab();
            }

            return downloadPromise.promise;
        }

        function rejectDownload(downloadPromise, error) {
            $log.error(error);
            downloadPromise.reject(error);
            return downloadPromise.promise;
        }

        function pollDownloadTab() {
            if (activeDownload && downloadTab.closed) {
                activeDownload = false;
                downloadPromise.resolve();
            } else {
                $timeout(pollDownloadTab, downloadTabPollingPeriod);
            }

        }

        function fixForIE(downloadTab) {
            if (downloadTab.document.body === null || downloadTab.document.body === undefined) {
                var body = downloadTab.document.createElement('body');
                downloadTab.document.appendChild(body);
            }
            return downloadTab;
        }

    }
})();