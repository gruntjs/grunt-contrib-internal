# {%= name %} [![Build Status](https://secure.travis-ci.org/gruntjs/{%= name %}.png?branch=master)](http://travis-ci.org/gruntjs/{%= name %}) (unreleased, for grunt v0.4.0a)

> {%= description %}


## Getting Started
_If you haven't used [grunt][] before, be sure to check out the [Getting Started][] guide._

Install this grunt plugin next to your project's [Gruntfile][Getting Started] with the following command. This will also add the plugin to your project's `package.json` file as a `devDependency`.

```
npm install {%= name %} --save-dev
```

Then add this line to your project's Gruntfile:

```javascript
grunt.loadNpmTasks('{%= name %}');
```

If the plugin was installed correctly, running `grunt --help` at the command line should list the newly-installed plugin's task(s) as a local Npm module task.

[grunt]: http://gruntjs.com/
[Getting Started]: https://github.com/gruntjs/grunt/blob/devel/docs/getting_started.md


{% if ('overview' in docs) { %}
{%= docs.overview %}
{% } else { %}
## Overview

In your project's Gruntfile, add a section named `{%= task_name %}` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  {%= task_name %}: {
    options: {
      // Task-specific options go here.
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
})
```
{% } %}

{%= docs.options || '' %}

{%= docs.examples || '' %}

## Release History
{% if (changelog) {
  _.each(changelog, function(details, version) {
    print('\n * ' + [
      grunt.template.date(details.date, 'yyyy-mm-dd'),
      version,
      details.changes.join(' '),
    ].join(' - '));
  });
} else { %}
_(Nothing yet)_
{% } %}
