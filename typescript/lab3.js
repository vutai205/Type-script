// Hàm tính điểm trung bình
var averageScore = function () {
    var scores = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        scores[_i] = arguments[_i];
    }
    var total = scores.reduce(function (sum, score) {
        return sum + score;
    }, 0);
    return scores.length === 0 ? 0 : total / scores.length;
};

console.log(averageScore(8, 9, 10));

// Định nghĩa kiểu hàm kiểm tra chẵn lẻ
var checkNumber = function (n) {
    return n % 2 === 0 ? "even" : "odd";
};

console.log(checkNumber(4));

// Hàm tạo thông tin người dùng
function createUser(name, age, role) {
    if (role === void 0) { role = "user"; }
    if (age !== undefined) {
        return "Name: " + name + ", Age: " + age + ", Role: " + role;
    }
    return "Name: " + name + ", Role: " + role;
}

console.log(createUser("Nam", 25, "admin"));

// Hàm xử lý danh sách sản phẩm
function mergeProducts(arr1, arr2) {
    return arr1.concat(arr2);
}

function printProducts() {
    var products = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        products[_i] = arguments[_i];
    }
    products.forEach(function (product, index) {
        console.log(index + 1 + ". " + product);
    });
}

console.log("\nProducts:");
var a = ["iPhone", "Samsung"];
var b = ["Xiaomi", "Oppo"];

var mergedProducts = mergeProducts(a, b);
console.log(mergedProducts);

printProducts.apply(void 0, mergedProducts);
