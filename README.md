# Node.js Shared (instantiated) Resource Example

If you only have one database connection, how do you share access to it between different files without clumsily passing the object around?

Make sure node.js is installed and run `node index.js` from the folder.

The database connection is initialized in `db.js` and it's simply required by  `index.js` and `feature.js` whenever it needs it.

By running `index.js`, you should see the following output:

```
[1] index.js:
[2] index.js: foo_from_index.js
[1] feature.js: foo_from_index.js
[2] feature.js: foo_from_index.js,bar_from_feature.js
[3] index.js: foo_from_index.js,bar_from_feature.js
```