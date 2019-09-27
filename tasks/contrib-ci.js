/*
 * grunt-contrib-internal
 * https://gruntjs.com/
 *
 * Copyright (c) 2016 Tyler Kellen, contributors
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {
  grunt.registerTask('contrib-ci', 'Normalizes AppVeyor and Travis CI configs.', skipIfExists => {
    skipIfExists = skipIfExists === 'skipIfExists';

    const path = require('path');
    const travis = grunt.file.read(path.join(__dirname, '..', '.travis.yml'));
    const appveyor = grunt.file.read(path.join(__dirname, '..', 'appveyor.yml'));
    const taskTravis = path.join(process.cwd(), '.travis.yml');
    const taskAppveyor = path.join(process.cwd(), 'appveyor.yml');

    if (!skipIfExists || !grunt.file.exists(taskTravis)) {
      grunt.file.write(taskTravis, travis);
    }
    if (!skipIfExists || !grunt.file.exists(taskAppveyor)) {
      grunt.file.write(taskAppveyor, appveyor);
    }

    grunt.log.ok('Normalized .travis.yml and appveyor.yml for grunt-contrib.');
  });
};
