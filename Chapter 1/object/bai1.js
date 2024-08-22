// oject thứ tự k qtrong
const person = {
    firstName: "Tùng",
    lastName: "Nguyễn",
    age: 26,
    eyeColor: "black"
};

console.log("check :", person);
console.log("name :", person.firstName);
console.log("name :", person["firstName"]);
// cách khác
const { firstName, lastName } = person;
console.log("name :", lastName);

// mảng thứ tự quan trọng
const coder = ["Tùng", 18,1,2];

console.log("Tuổi :", coder[1]);
// cách khác
const [x,y, ,z] = coder;
console.log(x,y,z);


// Toán tử ?
let user = {};
console.log(user?.address?.street ?? 'not undefined nha');

