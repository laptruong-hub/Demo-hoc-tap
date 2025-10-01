console.log("baitap 5");
const a = 5; //number
const b = '5'; //string
console.log(a == b); //true vì so sánh mềm dẻo hơn, ko phân biệt data type
console.log(a === b); //false vì so sánh cứng nhắc hơn, phân biệt data type
console.log(a != b); //false vì so sánh mềm dẻo hơn, ko phân biệt data type
console.log(a !== b); //true vì so sánh cứng nhắc hơn, phân biệt data type
console.log(a > b); //false vì so sánh mềm dẻo hơn, ko phân biệt data type
console.log(a < b); //false vì so sánh mềm dẻo hơn, ko phân biệt data type
console.log(a >= b); //true vì so sánh mềm dẻo hơn, ko phân biệt data type
console.log(a <= b); //true vì so sánh mềm dẻo hơn, ko phân biệt data type
console.log(a && b); //5 vì toán tử && trả về giá trị của toán hạng cuối cùng nếu tất cả các toán hạng đều đúng
console.log(a || b); //5 vì toán tử || trả về giá trị của toán hạng đầu tiên nếu nó đúng
