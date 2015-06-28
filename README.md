# jsFloatMath
JavaScript Library for mathemathic operations including decimal numbers

Has two methods,

1> addFloat(array)
    pass the numbers that you want to add in an array
2> multiplyFloat(array)
    pass the numbers that you want to multiply in an array

Create new object

var floatJs = require('floatingMathJS')
var newObj = new floatJs(5); // sets the rounding off point to 5 decimal places
var newOBJ = new floatJs(); // calculates the rounding point on the basis of numbers passed

//Calculation method of rounding point decimal places//
for addition
  the number of decimal points that is the highest amongst the array
  eg: [1,2.2,3.33,4.333] ===> rounding off point will be 3 decimal places
  
for multiplication
  the sum of number of decimal points in an array
  eg: [1,1.1, 1.2, 1.3, 1.4] ===> rounding off point will be 3
  
  
