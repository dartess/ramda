var assert = require('assert');

var R = require('remeda');
var eq = require('./shared/eq.js');


describe('times', function() {
  it('takes a map func', function() {
    eq(R.times(5, R.identity), [0, 1, 2, 3, 4]);
    eq(R.times(5, function(x) {
      return x * 2;
    },), [0, 2, 4, 6, 8]);
  });

  it('throws if second argument is not a valid array length', function() {
    // NOTE не применимо на уровне типов
    // assert.throws(function() { R.times(3)('cheers!'); }, RangeError);
    assert.throws(function() { R.times(-1, R.identity); }, RangeError);
  });

});
