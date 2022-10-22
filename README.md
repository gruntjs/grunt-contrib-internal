# grunt-contrib-internal[![Build Status](https://github.com/gruntjs/grunt-contrib-internal/workflows/Tests/badge.svg)](https://github.com/gruntjs/grunt-contrib-internal/actions?workflow=Tests)

> Internal tasks for managing the grunt-contrib projects


_Note that this is not an official Grunt plugin release! If you want to use this in a project, please be sure to follow the instructions for installing development versions, as outlined in the [Installing Grunt](https://gruntjs.com/installing-grunt) guide._


## Getting Started

If you haven't used [Grunt](https://gruntjs.com/) before, be sure to check out the [Getting Started](https://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](https://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-contrib-internal --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-contrib-internal');
```

_This plugin is used internally by grunt-contrib plugins, and shouldn't be used externally._

##### Skipping Existing CI Configs If They Exist

If you have needed customizations to the `.github/workflows/test.yml` file,
use the following to skip normalizing that file if it exists:

```js
grunt.registerTask('default', ['jshint', 'contrib-core', 'contrib-ci:skipIfExists']);
```



## Release History

 * 2022-10-21   v8.0.0   Drop node 12, test on node 18. Update dependencies.
 * 2021-07-08   v7.0.0   Update GitHub Actions config. Update dependencies.
 * 2021-02-15   v6.0.1   Update GitHub Actions config.
 * 2020-12-30   v6.0.0   Update dependencies.
 * 2020-12-30   v5.0.2   Update CI config.
 * 2020-09-09   v5.0.1   Update dependencies.
 * 2020-07-04   v5.0.0   Switch to GitHub Actions CI. Drop Node.js 8.x. Add Node.js 14.x. Update dependencies.
 * 2019-10-10   v4.0.1   Use esversion 6 instead of the deprecated esnext option.
 * 2019-09-27   v4.0.0   Drop Node.js 6. Add Node.js 12. Tweak CI configs.
 * 2018-07-28   v3.1.0   Add Node.js 10.
 * 2017-11-26   v2.0.0   Update major version since the Node.js 0.10 removal is a breaking change.
 * 2017-11-23   v1.4.2   Update CI configs; add Node.js 9.
 * 2017-10-31   v1.4.1   Update CI configs; remove Node.js 0.10.
 * 2017-06-10   v1.3.0   Update CI configs; add Node.js 8, remove 7.
 * 2016-11-23   v1.2.3   Update CI configs; add Node.js 7, remove 0.12, 5 and iojs.
 * 2016-07-13   v1.2.2   Add Node.js 6 in CI configs.
 * 2016-04-14   v1.2.1   Fix CI normalization regression.
 * 2016-04-06   v1.1.0   Fix "skipIfExists" argument to contrib-ci. Break out tasks into separate files.
 * 2016-04-06   v1.0.1   Include missing files from the npm package.
 * 2016-04-04   v1.0.0   Remove peerDependencies. Add task for normalizing CI configs.
 * 2014-11-22   v0.4.13   Various minor fixes.
 * 2014-11-22   v0.4.11   Use SVG badges.
 * 2014-05-05   v0.4.10   Lock dependency for 0.8.
 * 2014-04-08   v0.4.9   Add AppVeyor badges.
 * 2014-03-12   v0.4.8   Copy CONTRIBUTING.md from itself rather than grunt.
 * 2014-02-18   v0.4.7   Update repository parsing. Adds official npm parsing lib.
 * 2013-08-16   v0.4.6   Display current version of plugins in README.
 * 2013-04-28   v0.4.5   Get Travis CI URL from package.json.
 * 2013-04-01   v0.4.4   Changelog date timezone is localized.
 * 2013-02-20   v0.4.3   Fix typo in readme template.
 * 2013-02-17   v0.4.2   Moving overview text to the correct file. Mentioned `grunt.loadNpmTasks` in readme.
 * 2013-02-17   v0.4.1   Adding support for npm peerDependencies.
 * 2012-10-03   v0.1.0   Work in progress, not yet officially released.

---

Task submitted by ["Cowboy" Ben Alman](http://benalman.com/)

*This file was generated on Thu Jul 08 2021 18:09:15.*
