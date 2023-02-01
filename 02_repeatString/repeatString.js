const repeatString = function(word, times) {
  let newString = "";
  if (times < 0) {
    return "ERROR";
  } else {
    for (let i = 1; i <= times; i++) {
        newString += word;
    }
    return newString;
  }
};

// Do not edit below this line
module.exports = repeatString;
