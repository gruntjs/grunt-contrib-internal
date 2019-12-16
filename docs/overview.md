_This plugin is used internally by grunt-contrib plugins, and shouldn't be used externally._

### Skipping Existing CI Configs If They Exist

If you have needed customizations to the `.github/workflows/test.yml` file,
use the following to skip normalizing that file if it exists:

```js
grunt.registerTask('default', ['jshint', 'contrib-core', 'contrib-ci:skipIfExists']);
```
