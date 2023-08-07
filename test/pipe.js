var R = require('remeda');
var eq = require('./shared/eq.js');


describe('pipe', function() {
  // NOTE большая часть тестов не актуальна

  // it('is a variadic function', function() {
  //   eq(typeof R.pipe, 'function');
  //   eq(R.pipe.length, 0);
  // });

  it('basic usage pipe', function() {
    eq(R.pipe({ foo: 'bar', price: '13.4'}, R.prop('price'), parseInt), 13);
  });

  it('basic usage createPipe', function() {
    const pipe = R.createPipe(R.prop('price'), parseInt);
    eq(pipe({ foo: 'bar', price: '13.4'}), 13);
  });

  // it('passes context to functions', function() {
  //   function x(val) {
  //     return this.x * val;
  //   }
  //   function y(val) {
  //     return this.y * val;
  //   }
  //   function z(val) {
  //     return this.z * val;
  //   }
  //   var context = {
  //     a: R.pipe(x, y, z),
  //     x: 4,
  //     y: 2,
  //     z: 1
  //   };
  //   eq(context.a(5), 40);
  // });

  // it('throws if given no arguments', function() {
  //   assert.throws(
  //     function() { R.pipe(); },
  //     function(err) {
  //       return err.constructor === Error &&
  //              err.message === 'pipe requires at least one argument';
  //     }
  //   );
  // });

  // it('can be applied to one argument', function() {
  //   var f = function(a, b, c) { return [a, b, c]; };
  //   var g = R.pipe(f);
  //   eq(g.length, 3);
  //   eq(g(1, 2, 3), [1, 2, 3]);
  // });

});
