var R = require('remeda');
var eq = require('./shared/eq.js');

describe('invert', function() {

  it('takes a list or object and returns an object', function() {
    eq(typeof R.invert([]), 'object');
    eq(typeof R.invert({}), 'object');
  });

  // NOTE не применимо к TS
  // it('returns an empty object when applied to a primitive', function() {
  //   eq(R.invert(42), {});
  //   eq(R.invert('abc'), {});
  // });

  it('returns an empty object when applied to null/undefined', function() {
    eq(R.invert(null), {});
    eq(R.invert(undefined), {});
  });

  it('returns the input\'s values as keys, and keys as values', function() {
    eq(R.invert(['a', 'b', 'c']),       {a:'0', b:'1', c:'2'});
    eq(R.invert({x:'a', y:'b', z:'c'}), {a:'x', b:'y', c:'z'});
  });

  it('prefers the last key found when handling keys with the same value', function() {
    eq(R.invert(['a', 'b', 'a']), {a:'2', b:'1'});
    eq(R.invert({x:'a', y:'b', z:'a', _id:'a'}), {a: '_id', b: 'y'});
  });

  // this one is more of a sanity check
  it('is not destructive', function() {
    var input = {x:'a', y:'b', z:'a', _id:'a'};
    R.invert(input);
    eq(input, {x:'a', y:'b', z:'a', _id:'a'});
  });

});
