// Bài 1
var student = {
    id: 1,
    name: "Tai",
    score: 10
};
console.log("Student:", student);

// Bài 2
var user1 = {
    id: 1,
    email: "user1@gmail.com"
};

var user2 = {
    id: 2,
    email: "user2@gmail.com",
    phone: "0123456789"
};

console.log("User1:", user1);
console.log("User2:", user2);

// Bài 3
var add = function (a, b) {
    return a + b;
};

var multiply = function (a, b) {
    return a * b;
};

console.log("Cộng:", add(2, 3));
console.log("Nhân:", multiply(2, 3));

// Bài 4
function logStatus(status) {
    if (status === "loading") {
        console.log("Đang tải...");
    }
    else if (status === "success") {
        console.log("Thành công");
    }
    else if (status === "error") {
        console.log("Có lỗi xảy ra");
    }
    else {
        console.log("Đang chờ");
    }
}

logStatus("loading");
