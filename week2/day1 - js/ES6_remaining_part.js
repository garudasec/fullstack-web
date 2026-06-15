// ======= [ ES6 Concepts ]=======

// 1. Destructing in js

// Array

// let arr = [1,2,3,4];
// let [a,b,c,d,e] = arr;

// console.log(a,b,c,d,e);

// Object

// let obj = {a:1,b:2};
// let {c,a} = obj;

// console.log(c,a);

// 2. Type conversion

// convert str data type value ---> num data type

// let str = "123";

// let a1 = Number(str);
// console.log(a1, typeof a1);

// let a2 = +(str);
// console.log(a2, typeof a2);

// let a3 = parseInt(str);
// console.log(a3, typeof a3);

// convert num data type value ---> str data

// let num = 123;

// let a1 = String(num);
// console.log(a1, typeof a1);

// let a2 = num.toFixed();
// console.log(a2, typeof a2);

// // concatination
// let bag = ""

// bag+=num;

// console.log(bag, typeof bag);

// 3. Falsy Values in JavaScript

// 0
// false
// ""
// null
// undefined
// NaN

// console.log("hii" && !"byy" || "shy" && null || !undefined);

// 4. Ternary Operator

// syn: condition?"1st block run":"2nd block run"

// 5>3?console.log("hello"):console.log("chalo");
// 1?console.log("hello"):console.log("chalo");

// 5. Nullish Coalescing Operator (??)

//synx:  a??b if a is neither null nor undefined then a is answer
// other b is answer

// let ans1 = null??"user"
// let ans2 = "null"??"user"
// let ans3 = null??undefined
// let ans4 = "raj"??"user"

// console.log(ans1,ans2,ans3,ans4);

// 6. String toLowerCase() and toUpperCase()

// let str = "HeLLo";

// console.log(str.toLowerCase(),str);

// 7. Array add and remove operation

// let arr = [1,2,3,4];

// // Add Operation

// // push()---> RHS add ending point

// // unshift()---> LHS | Starting point

// Remove Operation and return as well

// pop()---> RHS remove ending point

// // shift()---> LHS | Starting point

// 8. Array indexOf()

// let arr = [1,3,5,1,2,1];
// console.log(arr.indexOf(1));

// 9. Rest and Spread Operator

// Spread Operator - Merge/ copy/ join [ ... ]

// array

// let a1 = [1,2,3];
// let a2 = [4,5,6,5,6,7,7,8,8,8];

// // let a3 = [1,2,3,4,5,6];

// let a3 = [...a1, ...a2,10,20];

// // let a3 = a1.concat(a2)

// console.log(a3, typeof a3);

// Object

// let o1 = {"a":1};
// let o2 = {"b":2};

// let o3 = {...o1,...o2,"c":3,"a":4};

// console.log(o3);

// Rest operator - return an array [...]

// function add(x,...y){
//     console.log(x);
//     console.log(y);

// }

// add(1,2)
// add(1)
// add(1,2,3)

// 10. reverse(), join() and split() Method

// let arr = [1,2,3,4];

// console.log(arr.reverse());

// let arr = ["h","e","l","l","o"]

// let str = "12345"

//  str[ip] -> split  -> arr[op]

// let ans = str.split("");
// console.log(ans);

//  arr [ip] join  str[op]

// let ans = arr.join("123")

// console.log(ans , typeof ans);

// 11. Array slice() and splice()
// return a new array
// slice - >copy slice(start index, end=end-1 index)
// let arr = [1,2,3,4,5];

// let ans1 = arr.slice(1,3);
// console.log(ans1, arr);

// let ans1 = arr.splice(1,3);
// console.log(ans1, arr);

// 12. Template Literals -

// var name = "love";

// console.log("My name is",name);
// console.log(`My name is ${name}`);

// 13. Function with Default Parameter

// function hii(name= "john"){
//     console.log(name);
// }

// hii()
// hii("chintu")

// 14. Callback and Higher Order Function

// function HOF(callback){
//     console.log("hello from HOF fn.");
//     callback();
//     console.log("byy from HOF fn.");

// }
// function greet(){
//     console.log("Hello from callback fn.");

// }

// HOF(greet)

//15. Array Higher Order Function Methods

// let arr = [1,2,3,4,5];

// arr.map((el,index,arr,d)=>{
// console.log(el,index,arr,d);

// })

// a) map() -
// return a new arr
// size of ip arr is equal to op arr

// let arr = [1,2,3,4,5];
// let ans = arr.map((el)=>{
//     return el+5
// })

// console.log(ans);

// b) filter()
// return a new array
// size is dynamic

// let arr = [1,2,3,4,5];

// let ans = arr.filter((el)=>{
//     return el%2==0
// })

// console.log(ans);

// c) sort() - arrangement
// let arr = [10,2,30,4,-5];

// let ans = arr.sort((a,b)=>b-a);
// console.log(ans);

// d) reduce() - used single value as a result

// let arr = [1,2,3,4,5];

// let ans = arr.reduce((acc,el)=>{
// return acc+el
// },0);

// console.log(ans);

// let arr = [1,2,3,4,5];

// let ans = arr.reduce((acc,el)=>{
// return acc+el
// },"");

// console.log(ans, typeof ans);

// e) forEach()

// return undefined
// size of ip arr is equal to op arr
// iteration

// let arr = [1,2,3,4,5];
// let ans = arr.forEach((el)=>{
//     console.log(el+5)
// })

// console.log(ans);

// f) includes()

// let arr = [1,2,3,4,5];

// console.log(arr.includes(10));
// console.log(arr.includes(3));

// 16. Problems on str pattern [Extra]

let str = "hello world";
let o1 = "world hello";
let o2 = "dlrow olleh";
let o3 = "olleh dlrow";

let ans = str
  .split(" ")
  .reverse()
  .map((el) => {
    return el.split("").reverse().join("");
  }).join(" ");

console.log(ans);