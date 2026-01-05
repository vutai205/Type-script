// Viết 1 hàm trả về chu vi và diện tích hình chữ nhật
// Viết 1 hàm tính tổng nhiều số (không biết trước số lượng tham số), sử dụng rest parameter
// Viết hàm trả về số lượng xuất hiện của 1 kí tự trong chuỗi
// Viết hàm trả về boolean kiểm tra 1 số có phải số nguyên tố

// Viết 1 hàm trả về chu vi và diện tích hình chữ nhật

function ChuNhat (width:number, height:number ): {chuvi:number, tich:number}{
    const chuvi = 2*(width+height);
    const tich = (width*height);
return {chuvi,tich};
}
console.log(ChuNhat(2,4));  

// Viết 1 hàm tính tổng nhiều số (không biết trước số lượng tham số), sử dụng rest parameter

function Sum(...numbers: number[]): number {
  return numbers.reduce((total, num) => total + num, 0);
}
console.log(Sum(1, 2, 3, 4, 5));

// Viết hàm trả về số lượng xuất hiện của 1 kí tự trong chuỗi

function countCharacter(str: string, char: string): number {
  let count = 0;

  for (const c of str) {
    if (c === char) {
      count++;
    }
  }

  return count;
}
console.log(countCharacter("hello", "hi"));

// Viết hàm trả về boolean kiểm tra 1 số có phải số nguyên tố

function isPrime(n: number): boolean {
  if (n < 2) return false;

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
}
console.log(isPrime(7));
console.log(isPrime(10));
