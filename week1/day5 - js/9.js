let arr = [1,2,3];
let arr1 = arr;

arr1.push(10);
arr.unshift(20);

arr1 = [2,3,4];
arr.pop(30);
arr.push(30);

console.log(arr);
console.log(arr1);