interface User {
  email: string;
  userId: number;
  googleId?: string;
  startTrial: () => string;
  getCoupon(cpid: string): number;
}

const Aman: User = {
  email: "a@gmail.com",
  userId: 1122,
  startTrial: () => {
    return "trial started";
  },
  getCoupon: (cpid: "ALL10") => {
    if (cpid === "ALL10") {
      return 10;
    } else {
      return 0;
    }
  },
};

//interface 1 opening
interface userCredentails {
  name: string;
  password: string;
}

//interface 2 openeing
interface userCredentails {
  role: "admin" | "user";
}

// using boths inetrface here only
const user: userCredentails = {
  name: "Aman",
  password: "scvscd",
  role: "admin",
};
