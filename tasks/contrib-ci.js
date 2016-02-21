/*
 * grunt-contrib-internal
 * http://gruntjs.com/
 *
 * Copyright (c) 2016 jQuery Foundation and other contributors
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {
  var path = require('path');
  grunt.registerTask('contrib-ci', 'Normalizes appveyor and travis ci configs.', function() {
    var travis = grunt.file.read(path.join(__dirname, '..', '.travis.yml'));
    var appveyor = grunt.file.read(path.join(__dirname, '..', 'appveyor.yml'));
    var taskTravis = path.join(process.cwd(), '.travis.yml');
    var taskAppveyor = path.join(process.cwd(), 'appveyor.yml');
    grunt.file.write(taskTravis, travis);
    grunt.file.write(taskAppveyor, appveyor);
    grunt.log.ok('Normalized .travis.yml and appveyor.yml for grunt-contrib.');
  });
};
