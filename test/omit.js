var R = require('remeda');
var eq = require('./shared/eq.js');


describe('omit', function() {
  var obj = {a: 1, b: 2, c: 3, d: 4, e: 5, f: 6};

  it('copies an object omitting the listed properties', function() {
    eq(R.omit(obj, ['a', 'c', 'f']), {b: 2, d: 4, e: 5});
  });

  // NOTE не применимо
  // it('includes prototype properties', function() {
  //   var F = function(param) {this.x = param;};
  //   F.prototype.y = 40; F.prototype.z = 50;
  //   var obj = new F(30);
  //   obj.v = 10; obj.w = 20;
  //   eq(R.omit(obj, ['w', 'x', 'y']), {v: 10, z: 50});
  // });

});
