var R = require('remeda');
var eq = require('./shared/eq.js');


describe('pathOr', function() {
  var deepObject = {a: {b: {c: 'c'}}, falseVal: false, nullVal: null, undefinedVal: undefined, arrayVal: ['arr']};

  it('takes a path and an object and returns the value at the path or the default value', function() {
    var obj = {
      a: {
        b: {
          c: 100,
          d: 200
        },
        e: {
          f: [100, 101, 102],
          g: 'G'
        },
        h: 'H'
      },
      i: 'I',
      j: ['J']
    };
    eq(R.pathOr(obj, ['a', 'b', 'c'], 'Unknown'), 100);
    eq(R.pathOr(obj, [], 'Unknown'), obj);
    eq(R.pathOr(obj, ['a', 'e', 'f', 1], 'Unknown'), 101);
    eq(R.pathOr(obj, ['j', 0], 'Unknown'), 'J');
    eq(R.pathOr(obj, ['j', 1], 'Unknown'), 'Unknown');
    eq(R.pathOr(null, ['a', 'b', 'c'], 'Unknown'), 'Unknown');
  });

  it("gets a deep property's value from objects", function() {
    eq(R.pathOr(deepObject, ['a', 'b', 'c'], 'Unknown'), 'c');
    eq(R.pathOr(deepObject, ['a'], 'Unknown'), deepObject.a);
  });

  it('returns the default value for items not found', function() {
    eq(R.pathOr(deepObject, ['a', 'b', 'foo'], 'Unknown'), 'Unknown');
    eq(R.pathOr(deepObject, ['bar'], 'Unknown'), 'Unknown');
  });

  it('returns the default value for null/undefined', function() {
    eq(R.pathOr(null, ['toString'], 'Unknown'), 'Unknown');
    eq(R.pathOr(undefined, ['toString'], 'Unknown'), 'Unknown');
  });

  it('works with falsy items', function() {
    eq(R.pathOr(false, ['toString'], 'Unknown'), Boolean.prototype.toString);
  });

});
