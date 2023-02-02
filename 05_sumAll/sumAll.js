const sumAll = function(min,max) {
  let sum = 0;
  let originNumber = min;
  let endNumber = max;

  if (min < 0 || max < 0) return "ERROR";
  if (!Number.isInteger(min) || !Number.isInteger(max)) return "ERROR";
  if (max < min) {
    originNumber = max;
    endNumber = min;
  }
  
  for (let i = originNumber; i <= endNumber; i++) {
    sum += i;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
