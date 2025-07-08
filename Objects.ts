// deinfinf an objet in ts
const user = {
  name: "Aman",
  age: 21,
  isAdmin: true,
};

//passing object as parameter can pass 1type only once
function regsiterUser({ name: string, age: number, isAdmin: boolean }) {}
regsiterUser({ name: "Aman", age: 21, isAdmin: true });

//function returning an object type
function userDetail(): { name: string; age: number; isAdmin: true } {
  return { name: "Aman", age: 21, isAdmin: true };
}

export {};
