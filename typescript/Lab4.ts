// Bài 1
// Tạo type Student gồm id, name, score.

// Bài 2
// Tạo interface User có id, email là required, còn phone optional.

// Bài 3
// Tạo type function Calculate cho phép cộng và nhân. Nhận 2 số a, b

// Trả về number Viết hàm:

// add(a, b)

// multiply(a, b)

// Bài 4
// Tạo type ApiStatus gồm: "idle" | "loading" | "success" | "error"

// Viết function logStatus(status: ApiStatus) Nếu:

// loading → in "Đang tải..."

// success → in "Thành công"

// error → in "Có lỗi xảy ra"




// Bài 1

type Student = {
    id: number,
    name:string,
    score:number,
};

const student:Student={
    id: 1,
    name:"Tai",
    score:10,
};
console.log("Student:",student);

// Bài 2

interface User {
    id:number,
    email:string,
    phone?:string,
};

const user1: User = {
  id: 1,
  email: "user1@gmail.com",
};

const user2: User = {
  id: 2,
  email: "user2@gmail.com",
  phone: "0123456789",
};

console.log("User1:", user1);
console.log("User2:", user2);

// Bài 3

type Calculate = (a: number, b: number) => number;
const add: Calculate = (a, b) => {
  return a + b;
};

const multiply: Calculate = (a, b) => {
  return a * b;
};

console.log("Cộng:", add(2, 3));     
console.log("Nhân:", multiply(2, 3)); 

// Bài 4
type ApiStatus = "idle" | "loading" | "success" | "error";

function logStatus(status: ApiStatus): void {
  if (status === "loading") {
    console.log("Đang tải...");
  } else if (status === "success") {
    console.log("Thành công");
  } else if (status === "error") {
    console.log("Có lỗi xảy ra");
  } else {
    console.log("Đang chờ");
  }
}

logStatus("loading");