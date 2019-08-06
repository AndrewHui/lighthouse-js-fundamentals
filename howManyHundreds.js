var num;
function howManyHundreds(num) {
  num = (num - (num % 100)) / 100;
  return num
}
console.log(howManyHundreds(920));	