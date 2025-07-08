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
