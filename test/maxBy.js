var R = require('remeda');
var eq = require('./shared/eq.js');


describe('maxBy', function() {

  it('returns the larger value as determined by the function', function() {
    // NOTE не применимо
    eq(R.maxBy([-3, 2], function(n) { return n * n; }), -3);
    eq(R.maxBy([{x: 3, y: 1}, {x: 5, y: 10}], R.prop('x')), {x: 5, y: 10});
  });

});
