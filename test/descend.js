var R = require('remeda');
var eq = require('./shared/eq.js');

describe('descend', function() {
  it('builds a descending comparator function out of the identity function', function() {
    eq(R.sortBy([3, 1, 8, 1, 2, 5], [R.identity, 'desc']), [8, 5, 3, 2, 1, 1]);
  });
});
