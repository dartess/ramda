var assert = require('assert');

var R = require('remeda');
var eq = require('./shared/eq.js');

const always = (t) => () => t;

describe('pickBy', function() {
  var obj = {a: 1, b: 2, c: 3, d: 4, e: 5, f: 6};

  it('creates a copy of the object', function() {
    assert.notStrictEqual(R.pickBy(obj, always(true)), obj);
  });

  it('when returning truthy, keeps the key', function() {
    eq(R.pickBy(obj, always(true)), obj);
    eq(R.pickBy(obj, always({})), obj);
    eq(R.pickBy(obj, always(1)), obj);
  });

  it('when returning falsy, keeps the key', function() {
    eq(R.pickBy(obj, always(false)), {});
    eq(R.pickBy(obj, always(0)), {});
    eq(R.pickBy(obj, always(null)), {});
  });

  // NOTE не применимо
  // it('is called with (val,key,obj)', function() {
  //   eq(obj, R.pickBy(function(val, key, _obj) {
  //     eq(_obj, obj);
  //     return key === 'd' && val === 4;
  //   }), {d: 4});
  // });

  // NOTE не применимо
  // it('retrieves prototype properties', function() {
  //   var F = function(param) {this.x = param;};
  //   F.prototype.y = 40; F.prototype.z = 50;
  //   var obj = new F(30);
  //   obj.v = 10; obj.w = 20;
  //   eq(R.pickBy(function(val) {return val < 45;}, obj), {v: 10, w: 20, x: 30, y: 40});
  // });

});
