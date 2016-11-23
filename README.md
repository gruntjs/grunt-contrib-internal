# grunt-contrib-internal v1.2.3 [![Build Status: Linux](https://travis-ci.org/gruntjs/grunt-contrib-internal.svg?branch=master)](https://travis-ci.org/gruntjs/grunt-contrib-internal) [![Build Status: Windows](https://ci.appveyor.com/api/projects/status/vhmcvnnnmou73wq8/branch/master?svg=true)](https://ci.appveyor.com/project/gruntjs/grunt-contrib-internal/branch/master)

> Internal tasks for managing the grunt-contrib projects


_Note that this is not an official Grunt plugin release! If you want to use this in a project, please be sure to follow the instructions for installing development versions, as outlined in the [Installing Grunt](http://gruntjs.com/installing-grunt) guide._


## Getting Started

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-contrib-internal --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-contrib-internal');
```

_This plugin is used internally by grunt-contrib plugins, and shouldn't be used externally._

##### Skipping Existing CI Configs If They Exist

If you have needed customizations to the `.travis.yml` or `appveyor.yml` files,
use the following to skip normalizing those files if they exist:

```js
grunt.registerTask('default', ['jshint', 'contrib-core', 'contrib-ci:skipIfExists']);
```



## Release History

 * 2016-11-23   v1.2.3   [object Object]
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

*This file was generated on Wed Nov 23 2016 23:34:18.*
