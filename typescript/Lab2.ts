// Tạo type Product có các trường sau:

// name: string
// price: number
// sale: boolean
// rate: enum {low : 'Thấp', medium: 'Trung bình', hight : 'Cao'}
// Tạo mảng listProducts có các phần tử có kiểu Product

// Nhập ít nhất 5 phần tử
// Viết hàm thêm mới 1 phần tử vào mảng listProducts có key = description, có giá trị = 'Tốt' nếu price > 5, 'Bình thường' nếu price <=5 (sử dụng map)

// Viết hàm hiển thị danh sách sản phẩm: (Tên sản phẩm, giá bán, trạng thái sale,Đánh giá) (Sử dụng forEach)

// Viết hàm tính tổng giá bán sản phẩm (sử dụng reduce)

// Viết hàm lọc những sản phẩm đang Sale và đánh giá từ Trung bình trở lên (Sử dụng filter)

enum Rate{
    low = "Thấp",
    medium = "Trung Bình",
    hight = "Cao",
}
 type Product = {
    name: string,
    price: number, 
    sale: boolean,
    rate: Rate;
    description: string;
 }
let listProducts: Product[] = [
  { name: "Áo", price: 4, sale: true, rate: Rate.low,description: "Thấp", },
  { name: "Quần", price: 5, sale: false, rate: Rate.medium,description: "Trung Bình", },
  { name: "Giày", price: 20, sale: true, rate: Rate.hight,description: "Cao", },
];

listProducts.forEach(product => {
  console.log(
    `Tên: ${product.name} | Giá: ${product.price} | Sale: ${product.sale} | Đánh giá: ${product.rate} | Mô tả: ${product.description}`
  );
});

const totalPrice = listProducts.reduce(
  (total, product) => total + product.price,
  0
);
console.log("Tổng giá bán:", totalPrice);

const saleProducts = listProducts.filter(
  product =>
    product.sale === true &&
    (product.rate === Rate.medium || product.rate === Rate.hight)
);

console.log(saleProducts);
