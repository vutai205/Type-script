// Viết 1 hàm trả về chu vi và diện tích hình chữ nhật
function ChuNhat(width, height) {
    const chuvi = 2 * (width + height);
    const tich = width * height;
    return { chuvi, tich };
}
console.log(ChuNhat(2, 4));

// Viết 1 hàm tính tổng nhiều số (rest parameter)
function Sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}
console.log(Sum(1, 2, 3, 4, 5));

// Viết hàm trả về số lượng xuất hiện của 1 kí tự trong chuỗi
function countCharacter(str, char) {
    let count = 0;
    for (const c of str) {
        if (c === char) {
            count++;
        }
    }
    return count;
}
console.log(countCharacter("hello", "t"));

// Viết hàm kiểm tra số nguyên tố
function isPrime(n) {
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
