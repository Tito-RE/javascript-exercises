const palindromes = function (text) {
  let status = true;
  let j = 0;
  text = cleanText(text);
  for (let i = text.length-1; i >= 0; i--) {
    if (text[i] != text[j]) {
      status = false;
      break;
    }
    j++;
  }
  return status;
};

function cleanText(text) {
  newText = "";
  text = text.toLowerCase();
  for (let i = 0; i < text.length; i++) {
    if (text[i] != "!" && text[i] != "?" && text[i] != "," && text[i] != "." && text[i] != " ") {
      newText += text[i];
    }
  }
  return newText;
}

// Do not edit below this line
module.exports = palindromes;
