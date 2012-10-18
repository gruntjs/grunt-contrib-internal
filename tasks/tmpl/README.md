# {%= name %} [![Build Status](https://secure.travis-ci.org/gruntjs/{%= name %}.png?branch=master)](http://travis-ci.org/gruntjs/{%= name %})

> {%= description %}

_Note that this plugin has not yet been released, and only works with the latest bleeding-edge, in-development version of grunt. See the [When will I be able to use in-development feature 'X'?](https://github.com/gruntjs/grunt/blob/devel/docs/faq.md#when-will-i-be-able-to-use-in-development-feature-x) FAQ entry for more information._

## Getting Started
_If you haven't used [grunt][] before, be sure to check out the [Getting Started][] guide._

From the same directory as your project's [Gruntfile][Getting Started] and [package.json][], install this plugin with the following command:

```bash
npm install {%= name %} --save-dev
```

Once that's done, add this line to your project's Gruntfile:

```js
grunt.loadNpmTasks('{%= name %}');
```

If the plugin has been installed correctly, running `grunt --help` at the command line should list the newly-installed plugin's task or tasks. In addition, the plugin should be listed in package.json as a `devDependency`, which ensures that it will be installed whenever the `npm install` command is run.

[grunt]: http://gruntjs.com/
[Getting Started]: https://github.com/gruntjs/grunt/blob/devel/docs/getting_started.md
[package.json]: https://npmjs.org/doc/json.html

{% _.each(docs, function(doc, name) { %}
## The {%= name %} task

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
    ].join(' - '));
  });
} else { %}
_(Nothing yet)_
{% } %}

--
Task submitted by <a href="{%= authors[0].url %}">{%= authors[0].name %}</a>.
