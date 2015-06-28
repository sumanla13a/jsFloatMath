'use strict';

var simple_statistics = require('very-simple-statistics')

var jsFloat = function (roundDigit) {
  this.roundDigit = roundDigit;

  this.addFloat = function (numbers) {
    /*numbers is an array*/
    numbers = checkNumberIsArray(numbers);
    roundDigit = 'undefined' === typeof this.roundDigit ? getMaxDecDigit(numbers) : this.roundDigit;
    return parseFloat((simple_statistics.sum(numbers)).toPrecision(roundDigit));
  }

  this.multiplyFloat = function (numbers) {
    numbers = checkNumberIsArray(numbers);
    roundDigit = 'undefined' === typeof this.roundDigit ? getSumDecDigitForMultipliction(numbers) : this.roundDigit;
    return parseFloat((simple_statistics.product(numbers).toPrecision(roundDigit)))
  }

  
}

function checkNumberIsArray(numbers) {
  if(!Array.isArray(numbers)) {
    numbers = [numbers]
  }
  return numbers;
}

function getMaxDecDigit(num) {
  var roundDigit = 0;
  for (var i=0, len = num.length; i<len; i++) {
    var currentRound = decimalPlaces(num[i])
    if(roundDigit < decimalPlaces(num[i]))
      roundDigit = currentRound
  }
  return roundDigit;
}

function getSumDecDigitForMultipliction(num) {
  return num.reduce(function(a,b) {
    return decimalPlaces(a) + decimalPlaces(b)
  })
}

function decimalPlaces(num) {
  var match = (''+num).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);
  if (!match) { return 0; }
  return Math.max(
       0,
       // Number of digits right of decimal point.
       (match[1] ? match[1].length : 0)
       // Adjust for scientific notation.
       - (match[2] ? +match[2] : 0));
}


module.exports = jsFloat

var newOBJ = new jsFloat(4)
var newObj = new jsFloat()

console.log(newOBJ)
console.log(newObj)
console.log(newObj.multiplyFloat([0.1,0.2]))
console.log(newOBJ.multiplyFloat([0.2,0.7]))