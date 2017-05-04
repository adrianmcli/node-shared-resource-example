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
