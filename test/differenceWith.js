var R = require('remeda');
var eq = require('./shared/eq.js');


describe('differenceWith', function() {
  var Ro = [{a: 1}, {a: 2}, {a: 3}, {a: 4}];
  var So = [{a: 3}, {a: 4}, {a: 5}, {a: 6}];
  var eqA = function(r, s) { return r.a === s.a; };

  it('combines two lists into the set of all their elements based on the passed-in equality predicate', function() {
    eq(R.differenceWith(Ro, So, eqA), [{a: 1}, {a: 2}]);
  });

  // NOTE не применимо

  // it('does not allow duplicates in the output even if the input lists had duplicates', function() {
  //   eq(R.differenceWith(Ro2, So2, eqA), [{a: 1}, {a: 2}]);
  // });

  // it('does not return a "sparse" array', function() {
  //   eq(R.differenceWith([1, 3, 2, 1, 3, 1, 2, 3], [3], identical).length, 2);
  // });

});
