# Change Log
All notable changes to this project will be documented in this file.
This project adheres to [Semantic Versioning](http://semver.org/).

## [Unreleased][unreleased]
### Changed
- Relaxed the maximum number of formal params allowed per function in the .jshint configuration from 3 to 5.
- Fixed templatesCache being duplicated in release build (Thanks to JWorthe PR#8)

## 0.0.2 - 2015-11-16
### Added
- An POC for JWT authentication (Thanks to HendrikKolver for testing and improvements PR#7)
- A Basic login page to test JWT and basic auth
- Added npm scripts to ease development workflow (Thanks to JWorthe PR#5)

### Changed
- Updated README docs.
- Set South African localization as the default (Thanks to JWorthe PR #1)
- Changed SASS include paths to be explicitly configured (Thanks to JWorthe PR#2)
- Changed vendor file sorting to be configuration driven. Porject angular files are still sorted with (Thanks to JWorthe PR#4)
- Fixed duplicate viewport tag (Thanks to JWorthe PR#6)
- Fixed a path issue in the index.html file when building for qa or release environments.

## 0.0.1 - 2015-09-29
### Added
- Alpha release.
- Angular Baboon build tools and configuration.
- Angular Baboon common modules.
- Minimal demo Angular application.
- [Documentation](README.md)

[unreleased]: https://github.com/olivierlacan/keep-a-changelog/compare/v0.0.8...HEAD
[0.0.2]: https://github.com/olivierlacan/keep-a-changelog/compare/v0.0.1...v0.0.2