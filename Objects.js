"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// deinfinf an objet in ts
var user = {
    name: "Aman",
    age: 21,
    isAdmin: true,
};
//passing object as parameter can pass 1type only once
function regsiterUser(_a) {
    var string = _a.name, number = _a.age, boolean = _a.isAdmin;
}
regsiterUser({ name: "Aman", age: 21, isAdmin: true });
//function returning an object type
function userDetail() {
    return { name: "Aman", age: 21, isAdmin: true };
}
