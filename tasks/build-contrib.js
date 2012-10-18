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
    var path = require('path');
    var asset = path.join.bind(null, __dirname);

    var meta = grunt.file.readJSON('package.json');
    meta.changelog = grunt.file.readYAML('CHANGELOG');

    var authors = grunt.file.read('AUTHORS');
    meta.authors = authors.split('\n').map(function(author) {
      var matches = author.match(/(.*?)\s*\((.*)\)/) || [];
      return {name: matches[1], url: matches[2]};
    });

    // Read task docs.
    meta.docs = {};
    grunt.file.expand('docs/*.md').forEach(function(filepath) {
      // Parse out the task name and section name.
      var basename = path.basename(filepath, '.md');
      var parts = basename.split('-');
      var section = parts.pop();
      var taskname = parts.join('-');
      if (!taskname) { return; }

      if (!meta.docs[taskname]) { meta.docs[taskname] = {}; }

      // Read doc file.
      var doc = grunt.file.read(filepath);
      // Adjust header level to be semantically correct for the readme.
      doc = doc.replace(/^#/gm, '###');
      meta.docs[taskname][section] = doc;
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
