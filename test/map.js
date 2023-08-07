var R = require('remeda');
var assert = require('assert');
var eq = require('./shared/eq.js');

describe('map', function() {
  var times2 = function(x) {return x * 2;};
  var dec = function(x) { return x - 1; };

  // NOTE вызов на массивах отрефакторен
  // it('maps simple functions over arrays', function() {
  //   eq(R.mapValues(times2, [1, 2, 3, 4]), [2, 4, 6, 8]);
  // });

  it('maps over objects', function() {
    eq(R.mapValues({}, dec), {});
    eq(R.mapValues({x: 4, y: 5, z: 6}, dec), {x: 3, y: 4, z: 5});
  });

  // NOTE не применимо
  // it('interprets ((->) r) as a functor', function() {
  //   var f = function(a) { return a - 1; };
  //   var g = function(b) { return b * 2; };
  //   var h = R.mapValues(g, f);
  //   eq(h(10), (10 * 2) - 1);
  // });

  // NOTE не применимо
  // it('dispatches to objects that implement `map`', function() {
  //   var obj = {x: 100, map: function(f) { return f(this.x); }};
  //   eq(R.mapValues(obj, add1), 101);
  // });

  it('throws a TypeError on null and undefined', function() {
    assert.throws(function() { return R.mapValues(null, times2); }, TypeError);
    assert.throws(function() { return R.mapValues(undefined, times2); }, TypeError);
  });

  // NOTE не применимо
  // it('composes', function() {
  //   var mdouble = R.mapValues(times2);
  //   var mdec = R.mapValues(dec);
  //   eq(mdec(mdouble([10, 20, 30])), [19, 39, 59]);
  // });

  // NOTE не применимо
  // it('can act as a transducer', function() {
  //   eq(R.into([], R.mapValues(times2), [1, 2, 3, 4]), [2, 4, 6, 8]);
  //   eq(R.transduce(R.mapValues(times2), R.flip(R.append), [], [1, 2, 3, 4]), [2, 4, 6, 8]);
  // });

});
