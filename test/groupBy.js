var R = require('../source/index.js');
var eq = require('./shared/eq.js');


describe('groupBy', function() {
  it('splits the list into groups according to the grouping function', function() {
    var grade = function(score) {
      return (score < 65) ? 'F' : (score < 70) ? 'D' : (score < 80) ? 'C' : (score < 90) ? 'B' : 'A';
    };
    var students = [
      {name: 'Abby', score: 84},
      {name: 'Brad', score: 73},
      {name: 'Chris', score: 89},
      {name: 'Dianne', score: 99},
      {name: 'Eddy', score: 58},
      {name: 'Fred', score: 67},
      {name: 'Gillian', score: 91},
      {name: 'Hannah', score: 78},
      {name: 'Irene', score: 85},
      {name: 'Jack', score: 69}
    ];
    var byGrade = function(student) {return grade(student.score || 0);};
    eq(R.groupBy(byGrade, students), {
      A: [{name: 'Dianne', score: 99}, {name: 'Gillian', score: 91}],
      B: [{name: 'Abby', score: 84}, {name: 'Chris', score: 89}, {name: 'Irene', score: 85}],
      C: [{name: 'Brad', score: 73}, {name: 'Hannah', score: 78}],
      D: [{name: 'Fred', score: 67}, {name: 'Jack', score: 69}],
      F: [{name: 'Eddy', score: 58}]
    });
  });

  it('returns an empty object if given an empty array', function() {
    eq(R.groupBy(R.prop('x'), []), {});
  });

  it('can act as a transducer', function() {
    var evenOdd = x => x % 2  === 0 ? 'even' : 'odd';
    var expected = {even: [2, 4, 6, 8], odd: [1, 3, 5, 7, 9]};
    eq(R.into({}, R.groupBy(evenOdd), R.range(1, 10)), expected);
    eq(R.transduce(R.groupBy(evenOdd), (result, input) => {result[input[0]] = input[1]; return result;}, {}, R.range(1, 10)), expected);
  });

});
