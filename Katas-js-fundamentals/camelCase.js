let camelCase = function(input) {
  let camelCase = input.split(" ");
  let result = camelCase[0];
  for (let par = 1; par < camelCase.length; par++) {
    result += camelCase[par][0].toUpperCase() + camelCase[par].slice(1);

  }
  return result;
};

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));