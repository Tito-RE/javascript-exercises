const add = function(a,b) {
	return a+b;
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(numbers) {
  let sum = 0;
  numbers.forEach(element => {
    sum += element;
  });	
  return sum;
};

const multiply = function(numbers) {
  let multi = 1;
  numbers.forEach(element => {
    multi *= element;
  });
  return multi;
};

const power = function(a,b) {
	return Math.pow(a,b);
};

const factorial = function(a) {
	let fact = 1;
  for (let i = 1; i <= a; i++) {
    fact *= i;
  }
  return fact;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
