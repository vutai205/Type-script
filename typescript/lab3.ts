// - Hàm tính điểm trung bình (Return type + Arrow Function)
// - Định nghĩa kiểu hàm kiểm tra số chẵn lẻ (Function as Type)
// - Hàm tạo thông tin người dùng (Default + Optional Parameter)
// - Hàm xử lý danh sách sản phẩm (Spread + Rest)


// Hàm tính điểm trung bình

const averageScore = (...scores: number[]): number => {
  const total = scores.reduce((sum, score) => sum + score, 0);
  return scores.length === 0 ? 0 : total / scores.length;
};

console.log(averageScore(8, 9, 10));

//  Định nghĩa kiểu hàm kiểm tra chẵn lẻ

type CheckNumber = (n: number) => string;

const checkNumber: CheckNumber = (n) => {
  return n % 2 === 0 ? "even" : "odd";
};

console.log(checkNumber(4)); 

// Hàm tạo thông tin người dùng

function createUser(
  name: string,
  age?: number,
  role: string = "user"
): string {
  if (age !== undefined) {
    return `Name: ${name}, Age: ${age}, Role: ${role}`;
  }
  return `Name: ${name}, Role: ${role}`;
}

console.log(createUser("Nam", 25, "admin"));

// Hàm xử lý danh sách sản phẩm

function mergeProducts(arr1: string[], arr2: string[]): string[] {
  return [...arr1, ...arr2];
}

function printProducts(...products: string[]): void {
  products.forEach((product, index) => {
    console.log(`${index + 1}. ${product}`);
  });
}

console.log("\nProducts:");
const a = ["iPhone", "Samsung"];
const b = ["Xiaomi", "Oppo"];

const mergedProducts = mergeProducts(a, b);
console.log(mergedProducts);

printProducts(...mergedProducts);
