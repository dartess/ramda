var eq = require('./shared/eq.js');
var R = require('remeda');

describe('clamp', function() {
  it('clamps to the lower bound', function() {
    eq(R.clamp(0, { min: 1, max: 10 }), 1);
    eq(R.clamp(1, { min: 3, max: 12 }), 3);
    eq(R.clamp(-100, { min: -15, max: 3 }), -15);
  });

  it('clamps to the upper bound', function() {
    eq(R.clamp(20, { min: 1, max: 10 }), 10);
    eq(R.clamp(23, { min: 3, max: 12 }), 12);
    eq(R.clamp(16, { min: -15, max: 3 }), 3);
  });

  it('leaves it alone when within the bound', function() {
    eq(R.clamp(4, { min: 1, max: 10 }), 4);
    eq(R.clamp(6, { min: 3, max: 12 }), 6);
    eq(R.clamp(0, { min: -15, max: 3 }), 0);
  });

  // NOTE: remeda не работает с не-числами

  // it('works with letters as well', function() {
  //   eq(R.clamp('d', 'n', 'f'), 'f');
  //   eq(R.clamp('d', 'n', 'a'), 'd');
  //   eq(R.clamp('d', 'n', 'q'), 'n');
  // });

});
