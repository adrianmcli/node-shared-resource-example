const db = require("./db");

console.log("[1] feature.js: " + db.get());

db.insert("bar_from_feature.js");

console.log("[2] feature.js: " + db.get());

module.exports = "baz";
