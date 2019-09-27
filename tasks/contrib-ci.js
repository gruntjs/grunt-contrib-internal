/*
 * grunt-contrib-internal
 * https://gruntjs.com/
 *
 * Copyright (c) 2016 Tyler Kellen, contributors
 * Licensed under the MIT license.
 */

'use strict';

const path = require('path');

module.exports = function(grunt) {
  grunt.registerTask('contrib-ci', 'Normalizes GitHub Actions CI configs.', skipIfExists => {
    skipIfExists = skipIfExists === 'skipIfExists';

    const ci = grunt.file.read(path.join(__dirname, '../.github/workflows/test.yml'));
    const task = path.join(process.cwd(), '.github/workflows/test.yml');

    if (!skipIfExists || !grunt.file.exists(task)) {
      grunt.file.write(task, ci);
    }

    grunt.log.ok('Normalized GitHub Actions CI config for grunt-contrib.');
  });
};
