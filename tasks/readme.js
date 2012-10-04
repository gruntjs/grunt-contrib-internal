/*
 * grunt-contrib-internal
 * http://gruntjs.com/
 *
 * Copyright (c) 2012 Tyler Kellen, contributors
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  grunt.registerTask('build-contrib', 'Generate contrib plugin files.', function() {
    var asset = require('path').join.bind(null, __dirname);

    var meta = grunt.file.readJSON('package.json');
    meta.changelog = grunt.file.readYAML('CHANGELOG');
    meta.task_name = meta.name.replace(/^grunt-contrib-/, '');

    // Read docs.
    meta.docs = {};
    ['examples', 'options', 'overview'].forEach(function(name) {
      var filepath = 'docs/' + name + '.md';
      if (grunt.file.exists(filepath)) {
        meta.docs[name] = grunt.file.read('docs/' + name + '.md');
      }
    });

    // Generate readme.
    grunt.file.copy(asset('tmpl/README.md'), 'README.md', {
      process: function(tmpl) {
        return grunt.template.process(tmpl, {data: meta, delimiters: 'init'});
      }
    });
    grunt.log.ok('Created README.md');

    // Copy contributing guide from grunt.
    grunt.file.copy('node_modules/grunt/CONTRIBUTING.md', 'CONTRIBUTING.md');
    grunt.log.ok('Created CONTRIBUTING.md');
  });

};
