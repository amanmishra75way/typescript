"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// after defing the parameter type as number, it will not allow string to be passed
function addTwo(num) {
    return num + 2;
}
var result = addTwo(5);
// const output = addTwo("Aman"); // This will cause a type error because "Aman" is not a number
console.log(result);
// parameters type declaration in arroe fn
var getName = function (name, age) {
    return name;
};
getName("Aman", 21);
// defining default parameters value
var voteable = function (name, age, elligible) {
    if (elligible === void 0) { elligible = false; }
    if (age >= 18) {
        elligible = true;
    }
    return elligible;
};
console.log(voteable("Aman", 21));
