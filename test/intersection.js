var R = require('remeda');
var eq = require('./shared/eq.js');


describe('intersection', function() {
  var M = [1, 2, 3, 4];
  var N = [3, 4, 5, 6];
  it('combines two lists into the set of common elements', function() {
    eq(R.intersection(M, N), [3, 4]);
  });

  // NOTE не применимо
  // it('does not allow duplicates in the output even if the input lists had duplicates', function() {
  //   eq(R.intersection(M2, N2), [3, 4]);
  // });
  //
  // it('does not allow duplicates in the output even if the first list is bigger and has duplicates', function() {
  //   eq(R.intersection(M2, N), [3, 4]);
  // });
  //
  // it('does not allow duplicates in the output even if the second list is bigger and has duplicates', function() {
  //   eq(R.intersection(M, N2), [3, 4]);
  // });

  // it('has R.equals semantics', function() {
  //   eq(R.intersection([0], [-0]).length, 0);
  //   eq(R.intersection([-0], [0]).length, 0);
  //   eq(R.intersection([NaN], [NaN]).length, 1);
  // });

});
