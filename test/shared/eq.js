var assert = require('assert');


module.exports = function(actual, expected) {
  assert.strictEqual(arguments.length, 2);
  assert.strictEqual(JSON.stringify(sortObjectKeys(actual)), JSON.stringify(sortObjectKeys(expected)));
};

function sortObjectKeys(obj) {
  if (typeof obj !== 'object' || obj === null) {
    return obj;
  }
  if (Array.isArray(obj)) {
    return obj.map(sortObjectKeys);
  }
  if (typeof obj === 'object' && obj !== null) {
    return Object.keys(obj)
      .sort()
      .reduce((sortedObj, key) => {
        sortedObj[key] = sortObjectKeys(obj[key]);
        return sortedObj;
      }, {});
  }
  return obj;
}
