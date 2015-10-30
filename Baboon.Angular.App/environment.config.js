/// <reference path="vendor/jquery.gritter/js/jquery.gritter.js" />
/// <reference path="vendor/angular-cookies/angular-cookies.min.js" />
/**
 * This file/module contains all configuration for the build process.
 */

//your site URLs
var baseUrl = {
	dev: {
		serverName: 'app.baboon.local',
        ssrsServerName: 'essqlreports/ReportServer_MSSQL2014'
	},
	qa: {
		serverName: 'app-baboon-qa.entelectprojects.co.za',
        ssrsServerName: 'essqlreports/ReportServer_MSSQL2014'
	},
	live: {
		serverName: 'app.entelect.co.za',
        ssrsServerName: '192.168.1.1/ReportServer'
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
	
	//the app's common directory
	commonDirectory: '../Baboon.Angular.Common',
	
	//the app's API definitions directory. Only used when scaffolding with ng-scaffold
	apiSpecificationDirectory: './src/api',
	
	//bootstrap directory
	bootstrapDirectory: './bower_components/bootstrap-sass',
	
	//bootstrap style guide ouput directory
	styleguideDirectory: './styleguide',
	
	//the app's build output directory
	distributionDirectory: './dist', //supports relative pathing e.g. ../dist to place the distribution in the Angular project's parent directory
	
	//the url for app's API Swagger definition. Only used when scaffolding with ng-scaffold 
    swaggerAPIDocsUrl: 'http://app.baboon.local/swagger/api-docs',
	
	//explicit list of included vendor javascript dependencies
	vendorJsFiles: [
		'bower_components/jquery/dist/jquery.min.js',
		'bower_components/bootstrap-sass/assets/javascripts/bootstrap.min.js',
		'bower_components/angular/angular.min.js',
		'bower_components/angular-i18n/angular-locale_en-za.js',
		'bower_components/angular-animate/angular-animate.min.js',
		'bower_components/angular-local-storage/dist/angular-local-storage.min.js',
		'bower_components/angular-messages/angular-messages.min.js',
		'bower_components/angular-resource/angular-resource.min.js',
		'bower_components/angular-toastr/dist/angular-toastr.min.js',
		'bower_components/angular-sanitize/angular-sanitize.min.js',
		'bower_components/angular-ui-router/release/angular-ui-router.min.js',
		'bower_components/moment/min/moment-with-locales.min.js',
		'bower_components/angular-moment/angular-moment.js',
		"bower_components/angular-filter/dist/angular-filter.min.js"        
	],

	//explicit list of included vendor css dependencies
	vendorCssFiles: [ 
		//don't add bootstrap in here (it's included as part of the bootstrap-sass build pipeline)
		'bower_components/angular-toastr/dist/angular-toastr.min.css'
    ],

    //explicitly list any folders that you want to @import in your sass code
    sassIncludeDirectories: [
        './bower_components/bootstrap-sass/assets/stylesheets'
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
