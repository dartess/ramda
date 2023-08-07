var R = require('remeda');
var eq = require('./shared/eq.js');


describe('partition', function() {
  it('splits a list into two lists according to a predicate', function() {
    var pred = function(n) { return n % 2; };
    eq(R.partition([], pred), [[], []]);
    eq(R.partition([0, 2, 4, 6], pred), [[], [0, 2, 4, 6]]);
    eq(R.partition([1, 3, 5, 7], pred), [[1, 3, 5, 7], []]);
    eq(R.partition([0, 1, 2, 3], pred), [[1, 3], [0, 2]]);
  });

  // NOTE не применимо
  // it('works with objects', function() {
  //   var pred = function(n) { return n % 2; };
  //   eq(R.partition(pred, {}), [{}, {}]);
  //   eq(R.partition(pred, { a: 0, b: 2, c: 4, d: 6 }),
  //     [{}, { a: 0, b: 2, c: 4, d: 6 }]
  //   );
  //   eq(R.partition(pred, { a: 1, b: 3, c: 5, d: 7 }),
  //     [{ a: 1, b: 3, c: 5, d: 7 }, {}]
  //   );
  //   eq(R.partition(pred, { a: 0, b: 1, c: 2, d: 3 }),
  //     [{ b: 1, d: 3 }, { a: 0, c: 2 }]
  //   );
  // });
});
