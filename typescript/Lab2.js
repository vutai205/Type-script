var Rate;
(function (Rate) {
    Rate["low"] = "Thấp";
    Rate["medium"] = "Trung Bình";
    Rate["hight"] = "Cao";
})(Rate || (Rate = {}));

var listProducts = [
    { name: "Áo", price: 4, sale: true, rate: Rate.low, description: "Thấp" },
    { name: "Quần", price: 5, sale: false, rate: Rate.medium, description: "Trung Bình" },
    { name: "Giày", price: 20, sale: true, rate: Rate.hight, description: "Cao" },
];

listProducts.forEach(function (product) {
    console.log("Tên: ".concat(product.name, " | Giá: ").concat(product.price, " | Sale: ").concat(product.sale, " | Đánh giá: ").concat(product.rate, " | Mô tả: ").concat(product.description));
});

var totalPrice = listProducts.reduce(function (total, product) {
    return total + product.price;
}, 0);

console.log("Tổng giá bán:", totalPrice);

var saleProducts = listProducts.filter(function (product) {
    return product.sale === true &&
        (product.rate === Rate.medium || product.rate === Rate.hight);
});

console.log(saleProducts);
