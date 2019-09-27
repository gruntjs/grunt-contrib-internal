/*
 * grunt-contrib-internal
 * https://gruntjs.com/
 *
 * Copyright (c) 2016 Tyler Kellen, contributors
 * Licensed under the MIT license.
 */

'use strict';

const path = require('path');
const readJson = require('read-package-json');

module.exports = function(grunt) {
  // Add custom template delimiters.
  grunt.template.addDelimiters('build-contrib', '{%', '%}');

  grunt.registerTask('contrib-core', 'Generate contrib plugin files.', function() {
    const done = this.async();
    const asset = path.join.bind(null, __dirname, 'assets');
    const self = this;

    readJson('package.json', console.error, false, (err, data) => {
      if (err) {
        console.error('There was an error reading the file');
        done(false);
      }

      const meta = data;
      meta.changelog = grunt.file.readYAML('CHANGELOG');
      meta.ci = grunt.file.exists('.github/workflows/test.yml');

      if (meta.ci) {
        // Create a valid GitHub Actions CI URL, based on [user/repository_name]
        meta.ci = `https://github.com${meta.repository.url
          .replace('github.com', '')
          .replace('git+https://', '')
          .replace('git://', '')
          .replace('https://', '')
          .replace('http://', '')
          .replace('.git', '')}`;
      }

      const authors = grunt.file.read('AUTHORS');
      meta.authors = authors.split('\n').map(author => {
        const matches = author.match(/(.*?)\s*\((.*)\)/) || [];
        return {name: matches[1], url: matches[2]};
      });

      // Used to display the "in development" warning message @ the top.
      meta.in_development = !(meta.keywords || []).includes('gruntplugin') || '';

      // Read plugin/task docs.
      meta.docs = {plugin: {}, task: {}};
      grunt.file.expand('docs/*.md').forEach(filepath => {
        // Parse out the task name and section name.
        const basename = path.basename(filepath, '.md');
        const parts = basename.split('-');
        const section = parts.pop();
        const taskname = parts.join('-');

        let namespace = taskname ? meta.docs.task : meta.docs.plugin;
        if (taskname) {
          if (!namespace[taskname]) {
            namespace[taskname] = {};
          }
          namespace = namespace[taskname];
        }

        // Read doc file.
        let doc = grunt.file.read(filepath);
        // Adjust header level to be semantically correct for the readme.
        doc = doc.replace(/^#/gm, '###');
        // Process as template.
        doc = grunt.template.process(doc, {data: meta, delimiters: 'build-contrib'});
        namespace[section] = doc;
      });

      // Generate readme.
      const tmpl = grunt.file.read(asset('README.tmpl.md'));
      const newReadme = grunt.template.process(tmpl, {data: meta, delimiters: 'build-contrib'});

      // Only write readme if it actually changed.
      const oldReadme = grunt.file.exists('README.md') ? grunt.file.read('README.md') : '';
      const re = /(\*This file was generated on.*)/;
      if (oldReadme.replace(re, '') !== newReadme.replace(re, '')) {
        grunt.file.write('README.md', newReadme);
        grunt.log.ok('Created README.md');
      } else {
        grunt.log.ok('Keeping README.md.');
      }

      // Copy contributing guide
      grunt.file.copy(path.resolve(__dirname, '..', 'CONTRIBUTING.md'), 'CONTRIBUTING.md');
      grunt.log.ok('Created CONTRIBUTING.md');

      // Fail task if any errors were logged.
      if (self.errorCount > 0) {
        done(false);
      }
      done();
    });
  });
};
