const fibonacci = function(input) {
  input = parseInt(input);
  let fib;
  let prev1 = 1;
  let prev2 = 0;
  if (input <= 1 && input >= 0) return input;
  if (input < 0) return "OOPS";
  

  for (let i = 2; i <= input; i++) {
    fib = prev2+prev1;
    prev2 = prev1;
    prev1 = fib;
  }
  return fib;
};

// Do not edit below this line
module.exports = fibonacci;
