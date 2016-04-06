/*
 * grunt-contrib-internal
 * http://gruntjs.com/
 *
 * Copyright (c) 2016 Tyler Kellen, contributors
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {
  grunt.registerTask('build-contrib', ['contrib-ci', 'contrib-core']);
};
