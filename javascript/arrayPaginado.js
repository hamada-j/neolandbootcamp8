let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let elemPage = 3;
let page = 1;

console.log(arr.slice(((page - 1) * elemPage) - 1));

// 0 3
// 2 5
// 4 7
// 6 9