// Simply require the instantiated db object
const db = require("./db");

// Check to see what's already inside it
console.log("[1] feature.js: " + db.get());

// Add another item and inspect its contents
db.insert("bar_from_feature.js");
console.log("[2] feature.js: " + db.get());
