// after defing the parameter type as number, it will not allow string to be passed
function addTwo(num: number) {
  return num + 2;
}
const result = addTwo(5);
// const output = addTwo("Aman"); // This will cause a type error because "Aman" is not a number
console.log(result);

// parameters type declaration in arroe fn
const getName = (name: string, age: number) => {
  return name;
};

getName("Aman", 21);

// defining default parameters value
const voteable = (name: string, age: number, elligible: boolean = false) => {
  if (age >= 18) {
    elligible = true;
  }
  return elligible;
};

console.log(voteable("Aman", 21));

//Restricting return type of a fn
const isAdult = (age: number): boolean => {
  if (age >= 18) {
    return true;
  } else {
    return false;
  }
  //   return "hello"; THIS TIME THIS WILL CAUSE ERROR
};

export {};
