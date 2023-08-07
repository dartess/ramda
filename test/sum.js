var R = require('remeda');
var eq = require('./shared/eq.js');


describe('sum', function() {
  it('adds together the array of numbers supplied', function() {
    eq(R.sumBy([1, 2, 3, 4], R.identity), 10);
  });

  it('does not save the state of the accumulator', function() {
    eq(R.sumBy([1, 2, 3, 4], R.identity), 10);
    eq(R.sumBy([1], R.identity), 1);
    eq(R.sumBy([5, 5, 5, 5, 5], R.identity), 25);
  });

});
