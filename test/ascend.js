var R = require('remeda');
var eq = require('./shared/eq.js');

describe('ascend', function() {
  it('builds an ascending comparator function out of the identity function', function() {
    eq(R.sortBy([3, 1, 8, 1, 2, 5], [R.identity, 'asc']), [1, 1, 2, 3, 5, 8]);
  });
});
