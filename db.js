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
