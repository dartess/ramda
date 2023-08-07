var R = require('../source/index.js');
var assert = require('assert');
var eq = require('./shared/eq.js');

describe('map', function() {
  var times2 = function(x) {return x * 2;};
  var add1 = function(x) {return x + 1;};
  var dec = function(x) { return x - 1; };

  it('maps simple functions over arrays', function() {
    eq(R.map(times2, [1, 2, 3, 4]), [2, 4, 6, 8]);
  });

  it('maps over objects', function() {
    eq(R.map(dec, {}), {});
    eq(R.map(dec, {x: 4, y: 5, z: 6}), {x: 3, y: 4, z: 5});
  });

  it('interprets ((->) r) as a functor', function() {
    var f = function(a) { return a - 1; };
    var g = function(b) { return b * 2; };
    var h = R.map(f, g);
    eq(h(10), (10 * 2) - 1);
  });

  it('dispatches to objects that implement `map`', function() {
    var obj = {x: 100, map: function(f) { return f(this.x); }};
    eq(R.map(add1, obj), 101);
  });

  it('throws a TypeError on null and undefined', function() {
    assert.throws(function() { return R.map(times2, null); }, TypeError);
    assert.throws(function() { return R.map(times2, undefined); }, TypeError);
  });

  it('composes', function() {
    var mdouble = R.map(times2);
    var mdec = R.map(dec);
    eq(mdec(mdouble([10, 20, 30])), [19, 39, 59]);
  });

  it('can act as a transducer', function() {
    eq(R.into([], R.map(times2), [1, 2, 3, 4]), [2, 4, 6, 8]);
    eq(R.transduce(R.map(times2), R.flip(R.append), [], [1, 2, 3, 4]), [2, 4, 6, 8]);
  });

});
