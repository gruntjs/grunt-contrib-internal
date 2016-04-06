_This plugin is used internally by grunt-contrib plugins, and shouldn't be used externally._

### Skipping Existing CI Configs If They Exist

If you have needed customizations to the `.travis.yml` or `appveyor.yml` files,
use the following to skip normalizing those files if they exist:

```js
grunt.registerTask('default', ['jshint', 'contrib-core', 'contrib-ci:skipIfExists']);
```
