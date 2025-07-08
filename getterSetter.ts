class User {
  private password: string;
  constructor(password: string) {
    this.password = password;
  }

  get passwordValue(): string {
    return this.password;
  }

  set passwordValue(v: string) {
    if (v.length <= 1) {
      throw new Error("Must be grater then 1 char");
    }
    this.password = v;
  }
}

const Aman = new User("credentials");
console.log(Aman.passwordValue); // Output: credentials

Aman.passwordValue = "newpassword";
console.log(Aman.passwordValue); // Output: newpassword

//Set invalid password
Aman.passwordValue = "a"; // ❌ Error: Must be greater than 1
