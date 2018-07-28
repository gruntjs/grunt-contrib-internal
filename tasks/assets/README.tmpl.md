# {%= name %} v{%= version %}{% if (travis) { %} [![Build Status: Linux]({%= travis %}.svg?branch=master)]({%= travis %}){% } %}{% if (appveyor) { %} [![Build Status: Windows]({%= appveyor %})](https://ci.appveyor.com/project/gruntjs/{%= name %}/branch/master){% } %}

> {%= description %}

{% if (in_development) { %}
_Note that this is not an official Grunt plugin release! If you want to use this in a project, please be sure to follow the instructions for installing development versions, as outlined in the [Installing Grunt](https://gruntjs.com/installing-grunt) guide._
{% } %}

## Getting Started

If you haven't used [Grunt](https://gruntjs.com/) before, be sure to check out the [Getting Started](https://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](https://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install {%= name %} --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('{%= name %}');
```

{%= docs.plugin.overview || '' %}

{% _.each(docs.task, function(doc, name) { %}
## {%= _.capitalize(name) %} task
_Run this task with the `grunt {%= name %}` command._

{%= doc.overview || '' %}
{%= doc.options || '' %}
{%= doc.examples || '' %}
{% }); %}
## Release History
{% if (changelog) {
  _.each(changelog, function(details, version) {
    var date = details.date;
    if (date instanceof Date) {
      date = grunt.template.date(new Date(date.getTime() + date.getTimezoneOffset() * 60000), 'yyyy-mm-dd');
    }
    print('\n * ' + [
      date,
      version,
      details.changes.join(' '),
    ].join('\u2003\u2003\u2003'));
  });
} else { %}
_(Nothing yet)_
{% } %}

---

Task submitted by [{%= authors[0].name %}]({%= authors[0].url %})

*This file was generated on {%= grunt.template.today() %}.*
