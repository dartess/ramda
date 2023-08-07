var R = require('remeda');
var eq = require('./shared/eq.js');


describe('pick', function() {
  var obj = {a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, 1: 7};

  it('copies the named properties of an object to the new object', function() {
    eq(R.pick(obj, ['a', 'c', 'f']), {a: 1, c: 3, f: 6});
  });

  it('handles numbers as properties', function() {
    eq(R.pick(obj, [1]), {1: 7});
  });

  it('ignores properties not included', function() {
    eq(R.pick(obj, ['a', 'c', 'g']), {a: 1, c: 3});
  });

  // NOTE не применимо
  // it('retrieves prototype properties', function() {
  //   var F = function(param) {this.x = param;};
  //   F.prototype.y = 40; F.prototype.z = 50;
  //   var obj = new F(30);
  //   obj.v = 10; obj.w = 20;
  //   eq(R.pick(['w', 'x', 'y'], obj), {w: 20, x: 30, y: 40});
  // });

});
