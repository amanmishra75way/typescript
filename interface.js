var Aman = {
    email: "a@gmail.com",
    userId: 1122,
    startTrial: function () {
        return "trial started";
    },
    getCoupon: function (cpid) {
        if (cpid === "ALL10") {
            return 10;
        }
        else {
            return 0;
        }
    },
};
