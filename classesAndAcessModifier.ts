class User {
  public email: string;
  private password: string;
  public name: string;
  constructor(email: string, name: string, password: string) {
    this.name = name;
    this.email = email;
    this.password = password;
  }
  public checkPassword(input: string): boolean {
    return this.password === input;
  }
}

const Aman = new User("aman@gmail.com", "Aman", "thisispwd");
console.log(Aman.checkPassword("wrong")); // false
console.log(Aman.checkPassword("thisispwd")); // true
