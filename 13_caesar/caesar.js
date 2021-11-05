let BigLetterArray = [];
for (i = 65; i < 91; i++) {
  let BigLetter = String.fromCharCode(i);
  BigLetterArray.push(BigLetter);
};
let SmallLetterArray = [];
for (i = 97; i < 123; i++) {
  let SmallLetter = String.fromCharCode(i);
  SmallLetterArray.push(SmallLetter);
};
let caesar = function (text, shift) {
  if (shift < -25 || shift > 25) {
    shift = shift % 26;
  };
  function Replacement(match) {
    if (BigLetterArray.some((element) => element == match)) {
      let index = BigLetterArray.indexOf(match);
      index += shift;
      if (index > 25) {
        index -= 26;
      } else if (index < 0) {
        index += 26;
      };
      return BigLetterArray[index];
    } else {
      index = SmallLetterArray.indexOf(match);
      index += shift;
      if (index > 25) {
        index -= 26;
      } else if (index < 0) {
        index += 26;
      };
      return SmallLetterArray[index];
    };
  };
  return text.replace(/[A-Za-z]/g, Replacement);
};

// Do not edit below this line
module.exports = caesar;
