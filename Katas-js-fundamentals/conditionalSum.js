const conditionalSum = function(values, condition) {
  let result1 = 0;
  for (let i = 0; i < values.length; i++) {
    if (condition === "even" && values[i] % 2 === 0) {
      result1 = result1 + values[i];
    }
    else if (condition === "odd" && values[i] % 2 !== 0) {
      result1 += values[i];
    }
    }
    return result1;
  }


console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));