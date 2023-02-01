const reverseString = function(text) {
  let reversedString = "";
  let textArray = text.split("");
  for (let i = textArray.length -1; i >= 0; i--) {
    reversedString += textArray[i];
  }
  return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
