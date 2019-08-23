function range(start, end, step) {
  var stepArray = [];

  if (start === undefined || end === undefined || step === undefined) {
    return stepArray;
  }
  else if (start > end) {
    return stepArray;
  }
  else if (step === 0 || step < 0) {
    return stepArray;
  }
  for (var i = start; i <= end; i += step) {
    stepArray.push(i);
  }
  return stepArray;
}
console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));