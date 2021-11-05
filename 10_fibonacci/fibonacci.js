const fibonacci = function (num) {
  if (num < 0) return "OOPS";
  sequence = [1, 1];
  for (i = 2; i < num; i++) {
    sequence[i] = sequence[i - 1] + sequence[i - 2];
  }

  return sequence[num - 1];
};

// Do not edit below this line
module.exports = fibonacci;
