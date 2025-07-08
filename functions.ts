// after defing the parameter type as number, it will not allow string to be passed
function addTwo(num: number) {
  return num + 2;
}
const result = addTwo(5);
// const output = addTwo("Aman"); // This will cause a type error because "Aman" is not a number
console.log(result);
