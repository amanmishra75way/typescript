type User = {
  readonly _id: string;
  name: string;
  email: string;
  mobile: number;
  password: string;
  isAdmin: true;
};

// creating a user object of User type which acess all value of user
const newUser: User = {
  _id: "1",
  name: "Aman",
  email: "amishra75way@gmail.com",
  mobile: 123456789,
  password: "12345sdb",
  isAdmin: true,
};

// newUser._id = "2"; // this can not be chabngebale beacuase readonly
