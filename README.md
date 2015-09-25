## Synopsis

This is the base Angular application for Entelect.

## Motivation

A short description of the motivation behind the creation and maintenance of the project. This should explain **why** the project exists.



## Installation

### Prerequisists
nodeJS
Python (2.7)



### node packages setup
npm install -g gulp bower
npm install

### bower packages setup
bower install

## Configuration

### Linting

By default, jshint is set up very strict. Modify the .jshintrc file to relax jshint.

### Environment

Modify the environment.config.js file to change directories and environment settings.

### Git

Modify the .gitignore file to customize what git includes in your source control

### Karma

Modify the karma.config.js file to customize the unit tests or include dependencies for testing.

## Usage

gulp: Once off debug friendly build of the Angular app, includes linting, testing and a code coverage report.
gulp clean: Cleans out the build, distribution and coverage directories

gulp watch: Watches the source directory for changes, on which modified files are selectively rebuilt and minified
gulp watch-debug: Watches the source directory for changes, on which modified files are selectively rebuilt to be debug friendly

gulp dev: Once off build with Teamcity reporting and minification for the dev environment.
gulp qa: Once off build with Teamcity reporting and minification for the qa environment.
gulp live: Once off build with Teamcity reporting and minification for the live environment.

gulp dev-debug: Once off debug friendly build with Teamcity reporting for the dev environment.
gulp qa-debug: Once off debug friendly build with Teamcity reporting for the qa environment.
gulp live-debug: Once off debug friendly build with Teamcity reporting for the live environment.

## Extending gulp

Add your custom gulp files to the gulp tasks directory. They will be automatically included into the master gulp file when executing gulp tasks.

## Contributors

Matthew van der Velden (matthew.vdvelden@entelect.co.za)
Ahmad Mahomed (ahmad@entelect.co.za)

## License

ToDo

## Shrinkwrap

TODO

## Common issues
