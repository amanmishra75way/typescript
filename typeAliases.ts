type User = {
  name: string;
  age: number;
  isAdmin: boolean;
};

function registerUser(user: User): User {
  return { name: "Aman", age: 21, isAdmin: true };
}

registerUser({ name: "Aman", age: 21, isAdmin: true });
