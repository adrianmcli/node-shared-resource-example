const db = require('./db')

console.log('[1] index.js: ' + db.get())

db.insert('foo_from_index.js')

console.log('[2] index.js: ' + db.get())

const feature = require('./feature')

console.log('[3] index.js: ' + db.get())