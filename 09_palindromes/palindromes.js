const palindromes = function (string) {
  let newString = string.toUpperCase();
  let array1 = Array.from(newString);

  function isLetter(element) {
    return (/[a-zA-Z]/).test(element);
  }

  let filtered = array1.filter(isLetter);
  let reversedArray = [];

  for (let i = filtered.length - 1; i >= 0; i--) {
    reversedArray.push(filtered[i]);
  };

  function issameLetter(element, index) {
    return element == reversedArray[index];
  }

  return filtered.every(issameLetter);

}

// Do not edit below this line
module.exports = palindromes;
