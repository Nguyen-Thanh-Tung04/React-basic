const myArray = ['apple', 'banana', 'orange'];
// const myList = myArray.map((item) => `<p>${item}</p>`)
// console.log(myList);

// nó thay cho for biến mảng ban đầu thành mảng mới và nó k ảnh hưởng đến mảng cũ

const myLisst = myArray.map((item, index) => {
    console.log(item, index);
    return item * 2;
});

// Filter để lọc
const ages = [32, 33, 16, 40];
// const result = ages.filter(checkAdult);
// function checkAdult(age) {
//     return age >= 18;
// }
const results = ages.filter((item) => {
    return item >= 18;
});
console.log(results);

// dấu nháy chéo 
let a = 5;
let b = 2;
console.log(`a = ${a},
b = ${b}`);

// nối chuỗi
const noi = `có a x b = ${a}/${b}`;
console.log(noi);

// toản tử ...
const numbersOne = [1, 2, 3];
const numbersTwo = [4, 5, 6];
const numbersCombined = [...numbersOne, ...numbersTwo]; // [1,2,3,4,5,6]
console.log(numbersCombined);


