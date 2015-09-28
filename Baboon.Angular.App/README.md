## Synopsis
This readme outlines the setup, configuration and usage of the Angular Baboon seed project.
## Table of Contents

1. [Installation](#Installation)
2. [Configuration](#Configuration)
3. [Usage](#Usage)
4. [Project Structure](#ProjectStructure)
5. [Style Guide](#Style Guide)
6. [Testing](#Testing)
7. [Common Issues](#CommonIssues)
8. [Contributors](#Contributors)
9. [License](#License)

## 1. <a name="Installation"></a>Installation

### 1.1 Prerequisists
* [nodeJS](https://nodejs.org/en/)
* [Python (2.7)](https://www.python.org/downloads/)

### 1.2 Node Packages Setup
Node is used as the environment to run all of the Angular application's build tools. 
In general, none of your node packages should be included your final Angular application.

To get started, you'll first need to do a once off installion of gulp and bower as globally accessible packages from the command line (-g ) using node's package manager (npm):

`npm install -g gulp bower`

Then run the general package installion. The installer wil resolve package dependencies from the _package.json_ file.

`npm install`

After this, you should have a _node_modules_ directory with all the resolved node packages. See the common issues if you're having issues.
```
Baboon.Angular.App
│   README.md
|	package.json
│   ...   
│
└───node_modules
    │   bower
	│   gulp
	│   ...
```
You can add new node dependencies in the following way:

`npm install my-extra-package --save`

This will save the package _my-extra-package_ as a dependency in the _package.json_ file with the latest possible version.
Don't forget to commit changes to package.json_ to source control.

### 1.3 Bower Packages Setup
Bower is the package manager for packages that **do** get included in your final Angular application. 
Bower's installer will resolve dependencies from the _bower.json_ file:

`bower install`

You can add new bower dependencies in the following way:

`bower install my-extra-package --save`

This will save the package _my-extra-package_ as a dependency in the _bower.json_ file with the latest possible version.
Don't forget to commit changes to _bower.json_ to source control.
## 2. <a name="Configuration"></a>Configuration

### 2.1 Linting
Linting is the process of running a program that will analyse code for potential errors. 
[Jshint](http://jshint.com/about/) is the default linting tool used in this seed project although 
[Eslint](http://eslint.org/) is another great linting tool alternative.
By default, jshint is set up to be very strict, but you can modify the _.jshintrc_ file to relax jshint. Check out the [jshint documentation](http://jshint.com/docs/options/) for all the available options.

### 2.2 Environment

Modify the _environment.config.js_ file to change the Angular application's directories, build and environment settings.

### 2.3 Git
Git is the only source control you should use. A few tips:
 
* It is recommended to commit bower packages to source control.
* It is **not** recommended to commit your node packages to source control

Modify the _.gitignore_ file to customize what Git includes in your source control.

### 2.4 Karma
[Karma](http://karma-runner.github.io/0.13/index.html) is the tool used to run the Angular tests that are written with [Jasmine](http://jasmine.github.io/edge/introduction.html). 
By convention, this projects indicates test files with the _.spec.js_ extension and mock test data files as _.spec.json_. 

Modify the _karma.config.js_ file to customize the testing configuration or include dependencies required during testing.

## 3. <a name="Usage"></a>Usage

### 3.1 Building the Angular App with Gulp
[Gulp](Gulp) is the task runner used to build the Angular app.
The _gulpfile.js_ has the following build tasks setup:

`gulp` - Once off debug friendly build of the Angular app, includes linting, testing and a code coverage report.

`gulp clean` - Cleans out the build, distribution and code coverage directories.

`gulp watch` - Watches the source directory for changes, on which modified files are selectively rebuilt and live reloaded.

`gulp dev` - Once off build with Teamcity reporting and minification for the dev environment.

`gulp qa` - Once off build with Teamcity reporting and minification for the qa environment.

`gulp live` - Once off build with Teamcity reporting and minification for the live environment.

### 3.2 Extending Gulp

You can add your custom gulp files to the gulp tasks directory. 
They will automatically be included into the master gulp file when executing gulp tasks.
```
Baboon.Angular.App
│   README.md
|	gulpfile.js
│   ...   
│
└───gulp tasks
    │   cleaning tasks.js
	│   my custom gulp file.js
	│   ...
```
_my custom gulp file.js_:
```javascript
var gulp = require('gulp');

gulp.task('custom-task', function() {
  // place code for your custom task here
});
```
Then running `gulp custom-task` in the root of the Angular project (Baboon.Angular.App) will execute your custom task.
### Node Package Shrinkwrapping
Use `npm shrinkwrap` to lock down your node dependency versions. 
This is very useful in maintaining consistency between developer environments. 
`npm shrinkwrap` generates a file called _npm-shrinkwrap.json_ which will override the normal _packages.json_ file when resolving dependencies during an `npm install`.

## 4. <a name="ProjectStructure"></a>Project Structure
## 5. <a name="StyleGuide"></a>Style Guide
## 6. <a name="Testing"></a>Testing
### 6.1 Code Coverage


## 7. <a name="CommonIssues"></a>Common Issues

### 7.1 Node Package Installation

TODO

## 8. <a name="Contributors"></a>Contributors

* Matthew van der Velden (matthew.vdvelden@entelect.co.za)
* Ahmad Mahomed (ahmad@entelect.co.za)

## 9. <a name="License"></a>License

ToDo




