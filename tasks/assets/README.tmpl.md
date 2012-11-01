# {%= name %}{% if (travis) { %} [![Build Status](https://secure.travis-ci.org/gruntjs/{%= name %}.png?branch=master)](http://travis-ci.org/gruntjs/{%= name %}){% } %}

> {%= description %}

{%= in_development && s.in_development %}
## Getting Started
If you haven't used [grunt][] before, be sure to check out the [Getting Started][] guide, as it explains how to create a [gruntfile][Getting Started] as well as install and use grunt plugins. Once you're familiar with that process, install this plugin with this command:

```shell
npm install {%= name %} --save-dev
```

[grunt]: http://gruntjs.com/
[Getting Started]: https://github.com/gruntjs/grunt/blob/devel/docs/getting_started.md

{% _.each(docs, function(doc, name) { %}
## {%= _.capitalize(name) %} task
_Run this task with the `grunt {%= name %}` command._

{%= doc.overview || '' %}
{%= doc.options || '' %}
{%= doc.examples || '' %}
{% }); %}
## Release History
{% if (changelog) {
  _.each(changelog, function(details, version) {
    print('\n * ' + [
      grunt.template.date(details.date, 'yyyy-mm-dd'),
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
