function lastIndexOf(array, search) {
  var num = -1;
  for (var i = 0; i < array.length; i++ ) {
    if (array[i] === search) {
      num = i;
    }
  }
  return num;
}
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1));
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 2));
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 3));
console.log(lastIndexOf([ 5, 5, 5 ], 5), "=?", 2);
console.log(lastIndexOf([], 3), "=?", -1);