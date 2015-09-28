/// <reference path="vendor/jquery.gritter/js/jquery.gritter.js" />
/// <reference path="vendor/angular-cookies/angular-cookies.min.js" />
/**
 * This file/module contains all configuration for the build process.
 */

//your site URLs
var baseUrl = {
	dev: {
		serverName: 'client.phambili.local',
        ssrsServerName: 'essqlreports/ReportServer_MSSQL2014'
	},
	qa: {
		serverName: 'deloittephambiliclientqa.entelectprojects.co.za',
        ssrsServerName: 'essqlreports/ReportServer_MSSQL2014'
	},
	live: {
		serverName: 'bm.deloitte.co.za',
        ssrsServerName: '197.97.125.243/ReportServer'
	}
};


var config = {};

module.exports = {
	//the namespace of your Angular application 
	appName: 'angular-baboon',
	
	//defualt build environment
	target: 'dev',
	
	//default debug flag
	debug: true,
	
	//
	silentFileRevisioning: true,
	
	//the port used by live reload during a gulp watch. Modify if you have more than one concurrent gulp watch
	liveReloadPort: 35729,
	
	//the app's source code directory
	sourceDirectory: './src',
	
	//the app's intermediary build directory
	buildDirectory: './.build',
	
	//the app's intermediary file revisioning directory
	revisionDirectory: 'temp-rev', //deprecated
	
	//the app's common directory
	commonDirectory: '../Baboon.Angular.Common',
	
	//the app's API definitions directory. Only used when scaffolding with ng-scaffold
	apiSpecificationDirectory: './src/api',
	
	//bootstrap directory
	bootstrapDir: './bower_components/bootstrap-sass',
	
	//the url for app's API Swagger definition. Only used when scaffolding with ng-scaffold 
    swaggerAPIDocsUrl: 'http://client.phambili.local/swagger/api-docs',
	
	//the app's build output directory
	distributionDirectory: './dist', //supports relative pathing e.g. ../dist to place the distribution in the Angular project's parent directory
	
	cssDistributionDirectory: '../Phambili.Web.Client.Public/Content', //supports relative pathing e.g. ../dist to place the distribution in the Angular project's parent directory

	//explicit list of included vendor javascript dependencies
	vendorJsFiles: [
		'bower_components/jquery/dist/jquery.min.js',
		'bower_components/angular/angular.min.js',
		'bower_components/angular-animate/angular-animate.min.js',
		'bower_components/angular-bootstrap/ui-bootstrap-tpls.min.js',
		'bower_components/angular-local-storage/dist/angular-local-storage.min.js',
		'bower_components/angular-messages/angular-messages.min.js',
		'bower_components/angular-resource/angular-resource.min.js',
		'bower_components/angular-toastr/dist/angular-toastr.min.js',
		'bower_components/angular-sanitize/angular-sanitize.min.js',
		'bower_components/angular-ui-router/release/angular-ui-router.min.js',
		'bower_components/textAngular/dist/textAngular-sanitize.min.js',
		'bower_components/textAngular/dist/textAngular-rangy.min.js',
		'bower_components/textAngular/dist/textAngular.min.js',
		'bower_components/angular-file-upload/angular-file-upload.min.js',
		'bower_components/highcharts-release/highcharts.src.js',
		'bower_components/highcharts-ng/dist/highcharts-ng.min.js',
		'bower_components/highcharts-release/highcharts-more.src.js',
		'bower_components/highcharts-release/modules/solid-gauge.src.js',
		'bower_components/highcharts-release/modules/heatmap.src.js',
		'bower_components/highcharts-release/modules/exporting.src.js',
		'bower_components/highcharts-release/modules/no-data-to-display.src.js',
		'bower_components/moment/min/moment-with-locales.min.js',
		'bower_components/angular-moment/angular-moment.js',
		'bower_components/angular-ui-select/dist/select.min.js',
		"bower_components/angular-filter/dist/angular-filter.min.js"        
	],

	//explicit list of included vendor css dependencies
	vendorCssFiles: [ 
		//don't add boot strap in here (it's included as part of the sass build)
		'bower_components/angular-toastr/dist/angular-toastr.min.css'
    ],
	
	//explicit list of included vendor font dependencies
	fonts: [
        'bower_components/**/*.woff',
        'bower_components/**/*.woff2',
        'bower_components/**/*.ttf',
        'bower_components/**/*.eot',
        'bower_components/**/*.otf'
    ],
	
	appConfig: {
		dev: {
			webapi: 'http://' + baseUrl.dev.serverName + '/api/',
			serverBase: 'http://' + baseUrl.dev.serverName + '/',
            ssrsBase: 'http://' + baseUrl.dev.ssrsServerName + '/',
			debug: true
		},
		qa: {
			webapi: 'https://' + baseUrl.qa.serverName + '/api/',
			serverBase: 'https://' + baseUrl.qa.serverName + '/',
            ssrsBase: 'http://' + baseUrl.qa.ssrsServerName + '/',
			debug: true
		},
		live: {
			webapi: 'https://' + baseUrl.live.serverName + '/api/',
			serverBase: 'https://' + baseUrl.live.serverName + '/',
            ssrsBase: 'http://' + baseUrl.live.ssrsServerName + '/',
			debug: true
		}
	}

};