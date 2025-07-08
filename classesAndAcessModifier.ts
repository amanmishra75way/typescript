class User {
  public email: string;
  private password: string;
  public name: string;
  constructor(email: string, name: string, password: string) {
    this.name = name;
    this.email = email;
    this.password = password;
  }
}

const Aman = new User("aman@gmail.com", "Aman", "thisispwd");
Aman.id;
