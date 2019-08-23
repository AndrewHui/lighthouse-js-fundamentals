const repeatNumbers = function(data) {
  let result = "";
  let convertString = "";
  for (let i = 0; i < data.length; i++) {
    convertString = String(data[i][0]);
    for (let ii = 0; ii < data[i][1]; ii++) {
      result += convertString;
    }
    if (i < data.length-1) {
      result += ", ";
    }
  }
  return result;
};

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));