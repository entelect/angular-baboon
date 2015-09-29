## Baboon.Angular.App Synopsis
This read me outlines the setup, configuration and usage of the Angular Baboon seed project.
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

### 1.1 Prerequisites
* [nodeJS](https://nodejs.org/en/)
* [Python (2.7)](https://www.python.org/downloads/)

### 1.2 Node Packages Setup
Node is used as the environment to run all of the Angular application's build tools. 
In general, none of your node packages should be included your final Angular application.

To get started, you'll first need to do a once off installation of gulp and bower as globally accessible packages from the command line (-g ) using node's package manager (npm):

`npm install -g gulp bower`

Then run the general package installation. The installer will resolve package dependencies from the _package.json_ file.

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
Linting is the process of running a program that will analyze code for potential errors. 
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

`gulp` or `gulp dev`- Once off debug friendly build of the Angular app, includes linting, testing and a code coverage report.

`gulp clean` - Cleans out the build, distribution and code coverage directories.

`gulp watch` - Watches the source directory for file contents changes, on which modified files are selectively rebuilt and live reloaded. Note that new or deleted files are not detected by gulp watch at this time.

`gulp qa` - Once off build with Teamcity reporting and minification for the qa environment.

`gulp live` - Once off build with Teamcity reporting and minification for the live environment.

### 3.2 Generate a Bootstrap Style Guide (Experimental)

A new experimental feature has been added to Angular Baboon to generate a living style guide per Angular application.
It can be generated using the following gulp command:

`gulp styleguide` - Generates an application specific styleguide using the Bootstrap 3 documentation. 

By default, it's accessible from _styleguide/index.html. 
The style guide generation doesn't rebuild the bootstrap documentation from scratch using Ruby and Jekyll. 
What it does in take a prebuilt version of the docs, and replace the boostrap assets with the release build of the angular application's css.

### 3.3 Extending Gulp Tasks

You can add your custom gulp files to the gulp tasks directory. 
They will automatically be included into the master gulp file when executing gulp tasks.
```
Baboon.Angular.App
|	README.md
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
### Node Package Shrink-wrapping
Use `npm shrinkwrap` to lock down your node dependency versions. 
This is very useful in maintaining consistency between developer environments. 
`npm shrinkwrap` generates a file called _npm-shrinkwrap.json_ which will override the normal _packages.json_ file when resolving dependencies during an `npm install`.

## 4. <a name="ProjectStructure"></a>Project Structure
Below is the Angular project structure after all the setup and build has been run:
```
Baboon.Angular.App
|	.bowerrc
|	.gitignore
|	.jshintrc
|	bower.json 
|	environment.config.js
|	gulpfile.js
|	karma.config.js
|	package.json
|	README.md   
|
└───.build
└───bower_components
└───coverage
└───dist
└───gulp tasks
└───node_modules
└───styleguide
└───src
	|	app.js
	|	app.scss
	|	app.module.js
	|	app.spec.js
	|	app.vendors.module.js
	|	config.tpl.js
	|	index.html
	|
	└───api
	└───assets
	└───generated
	└───modules
```
Note that only the configuration files are kept at the root of the project, whilst the actual source code that gets built into the final distributable is kept in the _src_ directory.
Explicitly included resources from the _bower_components_ directory are also included in the final distribution, but must be configured from the _environment.config.js_ file.
Within the _src_ directory:

The _src/assets_ is the general purpose assets directory. Anything not _.css_ or _.js_ should go in there.

The _src/api_ directory contains _.json_ Swagger API definition files. This is only relevant if you choose to use the Angular resource scaffolding features. 

The _src/generated_ directory contains the generated files from the scaffolding, don't modify these files, rather extend them.

The _src/assets_ directory gets flattened and included as is during hte release build.

The _src/modules_ directory contains all your glorious hand written code, see the next section for details on this.

_app.js_ is the main Angular application file. Any _$rootscope_ or _run_ code should live here.

_app.scss_ is the root scss file, a good place for any bootstrap styling overrides.

_app.module.js_ is the root module definition file. Register all your new modules here.

_app.vendors.module.js_ is the root vendor module registration file. Register any new bower stuff here.

_config.tpl.js_ is a template javascript file for the root angular app configuration. Runtime and environment variables get setup here.

_index.html_ is the base html page. This is the entry point to your app.
### 4.1 Angular Module Structure
Angular Baboon promotes the usage of module and submodule structures that are feature focused. 
Each module contains only the controllers, filters, directives etc. that it needs. 
Similarly, each module contains its own styling and tests. 
Any shared code between (sub)modules should be elevated to a higher module. 
This approach keeps modules small and easy to test.
```
myModule
|	myModule.config.js
|	myModule.module.js
|	myModule.scss  
|
└───controllers
└───directives
└───filters
└───services
└───templates
└───tests
└───mySubModule
	|	mySubModule.config.js
	|	mySubModule.module.js
	|	mySubModule.scss  
	|
	└───controllers
	└───directives
	└───filters
	└───services
	└───templates
	└───tests
```
The _*.module.js_ files simply contain the module definition and dependency hierarchy. 
Not the usage of the fully qualified name space. The prevents module name collision as the project grows:
```javascript
(function(){
  'use strict';
  angular.module( 'angular-baboon.my-module', [
      'angular-baboon.my-module.my-sub-module'
    ]);

})();
```
The _*.config.js_ files contain any module configuration code, for example [ui-router](https://github.com/angular-ui/ui-router) state configuration:
```javascript
(function () {
    'use strict';
    angular.module('angular-baboon.my-module')
        .config(function ($stateProvider) {
            $stateProvider
                .state('my-module', {
                    abstract: true,
                    url: '/my-module',
                    template: '<div>Hello World</div>'
                });
        });
})();
``` 
## 5. <a name="StyleGuide"></a>Style Guide
Every major open-source project has its own style guide: a set of conventions (sometimes arbitrary) about how to write code for that project. 
It is much easier to understand a large code base when all the code in it is in a consistent style.

But because this just a seed project, you can choose to ignore all of this and do things your own way.

Angular Baboon does have some style enforcement via jshint, which you can choose to customize, but for the most part Angular Baboon is convention driven. The following guides are recommended:
### 5.1 Angular
Angular Baboon follows [John Papa's style guide](https://github.com/johnpapa/angular-styleguide) for the Angular code (mostly).
We've found this to be a practical and relatively maintainable style.

### 5.2 Bootstrap SASS
Angular Baboon is is build with the SASS implementation of [Bootstrap 3](http://getbootstrap.com/). 
The reason for this is that Bootstrap is changing from [LESS](http://lesscss.org/) to [SASS](http://sass-lang.com/) officially as part of Bootstrap 4.
Check out [this style guide](http://sass-guidelin.es/) on how to keep your sassy css clean. 

### 5.3 IDE
Its entirely up to you what IDE you use. For the the most consistent code base, it's recommended that developers use a common IDE. 
Angular Baboon is written in [Visual Studio Code](https://code.visualstudio.com/) and uses the built in code formatters. 
In no particular order, some other great alternatives are:

* [WebStorm](https://www.jetbrains.com/webstorm/)
* [Atom (Free)](https://atom.io/)
* [Brackets.io (Free)](http://brackets.io/)
* [Visual Studio 2013+](https://www.visualstudio.com/)

## 6. <a name="Testing"></a>Testing

Check out this [Year Of Moo - Full Spectrum Angular Testing](http://www.yearofmoo.com/2013/01/full-spectrum-testing-with-angularjs-and-karma.html) guide. 
It's a little out of date, so the syntax is incorrect, but the concepts and approaches are useful in understanding how to test your Angular applications.

### 6.1 Code Coverage
As part of the build tools, a code coverage report is generated. This report can be accessed from _coverage/<test browser>/index.html_.

It is recommended that you run the tests locally, via a normal `gulp` call, as this will give you a detailed breakdown of the code coverage.
The code coverage report from a release build only gives the coverage of the minified files.

## 7. <a name="CommonIssues"></a>Common Issues
TODO

### 7.1 Node Package Installation

TODO

scaffolding - how are the backend api calls happening?

## 8. <a name="Contributors"></a>Contributors

* Matthew van der Velden (matthew.vdvelden@entelect.co.za)
* Ahmad Mahomed (ahmad@entelect.co.za)

## 9. <a name="License"></a>License

ToDo




