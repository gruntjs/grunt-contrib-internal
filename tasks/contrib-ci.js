/*
 * grunt-contrib-internal
 * http://gruntjs.com/
 *
 * Copyright (c) 2016 Tyler Kellen, contributors
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {
  grunt.registerTask('contrib-ci', 'Normalizes AppVeyor and Travis CI configs.', function(skipIfExists) {
    skipIfExists = skipIfExists === 'skipIfExists';

    var path = require('path');
    var travis = grunt.file.read(path.join(__dirname, '..', '.travis.yml'));
    var appveyor = grunt.file.read(path.join(__dirname, '..', 'appveyor.yml'));
    var taskTravis = path.join(process.cwd(), '.travis.yml');
    var taskAppveyor = path.join(process.cwd(), 'appveyor.yml');

    if (!skipIfExists || !grunt.file.exists(taskTravis)) {
      grunt.file.write(taskTravis, travis);
    }
    if (!skipIfExists || !grunt.file.exists(taskAppveyor)) {
      grunt.file.write(taskAppveyor, appveyor);
    }

    grunt.log.ok('Normalized .travis.yml and appveyor.yml for grunt-contrib.');

  });
};
