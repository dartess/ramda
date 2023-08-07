var R = require('remeda');
var eq = require('./shared/eq.js');


describe('uniqBy', function() {

  it('returns a set from any array based on predicate', function() {
    eq(R.uniqBy([-2, -1, 0, 1, 2], Math.abs), [-2, -1, 0]);
  });

  it('keeps elements from the left', function() {
    eq(R.uniqBy([-1, 2, 4, 3, 1, 3], Math.abs), [-1, 2, 4, 3]);
  });

  it('returns an empty array for an empty array', function() {
    eq(R.uniqBy([], R.identity), []);
  });

  // NOTE: не применимо
  // it('has R.equals semantics', function() {
  //   eq(R.uniqBy([-0, 0], R.identity).length, 2);
  //   eq(R.uniqBy([NaN, NaN], R.identity).length, 1);
  // });

  // NOTE: не применимо
  // it('can act as a transducer', function() {
  //   var input = [-1, -5, 2, 10, 1, 2];
  //   var expected = [-1, -5, 2, 10];
  //   eq(R.into([], R.uniqBy(Math.abs), input), expected);
  //   eq(R.transduce(R.uniqBy(Math.abs), R.flip(R.append), [], input), expected);
  // });

});
