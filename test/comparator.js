var R = require('remeda');
var eq = require('./shared/eq.js');


describe('comparator', function() {
  it('builds a comparator function for sorting out of a simple predicate that reports whether the first param is smaller', function() {
    eq(R.sort([3, 1, 8, 1, 2, 5], function(a, b) {return a - b;}), [1, 1, 2, 3, 5, 8]);
  });

});
