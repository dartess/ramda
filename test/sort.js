var R = require('remeda');
var eq = require('./shared/eq.js');


describe('sort', function() {
  it('sorts the elements of a list', function() {
    eq(R.sort([3, 1, 8, 1, 2, 5], function(a, b) {return a - b;}), [1, 1, 2, 3, 5, 8]);
  });

  it('does not affect the list passed supplied', function() {
    var list = [3, 1, 8, 1, 2, 5];
    eq(R.sort(list, function(a, b) {return a - b;}), [1, 1, 2, 3, 5, 8]);
    eq(list, [3, 1, 8, 1, 2, 5]);
  });

});
