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

For convenience, here is the entirety of the code:

### `db.js`

```js
function db() {
  const state = [];
  return {
    insert: function(x) {
      return state.push(x);
    },
    get: function() {
      return state;
    },
  };
}

const myDb = new db();

module.exports = myDb;
```

### `index.js`

```js
// Simply require the instantiated db object
const db = require('./db')

// Check to see that it is fresh
console.log('[1] index.js: ' + db.get())

// Insert something inside and check to see that it was successful
db.insert('foo_from_index.js')
console.log('[2] index.js: ' + db.get())

// Require the code from feature.js
const feature = require('./feature')

// Check the state again to see that it contains code inserted by both index.js and feature.js
console.log('[3] index.js: ' + db.get())
```

### `feature.js`

```js
// Simply require the instantiated db object
const db = require("./db");

// Check to see what's already inside it
console.log("[1] feature.js: " + db.get());

// Add another item and inspect its contents
db.insert("bar_from_feature.js");
console.log("[2] feature.js: " + db.get());
```