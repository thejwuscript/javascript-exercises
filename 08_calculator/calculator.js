const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (array) {
  let answer = array.reduce(function (previousValue, currentValue) {
    return previousValue + currentValue;
  }, 0)
  return answer;
};

const multiply = function (array) {
  let ans = array.reduce(reducer, 1)
  function reducer(previousV, currentV) {
    return previousV * currentV;
  }
  return ans;
};

const power = function (a, b) {
  return Math.pow(a, b)
};

const factorial = function (num) {
  if (num == 0) return 1;
  let array = [];
  for (i = 1; num >= i; i++) {
    array.push(i);
  }
  function reducer(previousValue, currentValue) {
    return previousValue * currentValue;
  }
  let ans = array.reduce(reducer, 1)
  return ans;
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
