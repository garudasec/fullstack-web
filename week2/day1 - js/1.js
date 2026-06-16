// 9. Rest and spread operator 

// spread opertor - used for merge/copy/join 

// array
// let a1 = [1,2,3]
// let a2 = [4,5,6,7,8,9]

// // let a3 = [1,2,3,4,5,6]

// let a3 = [...a1,...a2, 10, 20]

// let a3 = a1.concat(a2);

// console.log(a3, typeof a3);

// object


// rest operator - return an array [...]

// function add(x,...y) {
//     console.log(x);
//     console.log(y);
// }

// add(1,2)
// add(1)
// add(1,2,3,4)



// 10 reverse(), join() and split() methods

//reverse
// let arr = [1,2,3,4,5];
// console.log(arr.reverse());


// split() - todenge use hi jo juda hua hai (string hoga input me)
// join() - jodenge use hi jo tuta hua hai - (array hoga input me)

// split

// let arr = ["h","e","i","o","u"]
// let str = "12345"

// // str[ip] -> split -> arr[op]
// // let ans = str.split("");
// // console.log(ans);

// // arr [ip] join str[op]

// let ans = arr.join(" ")
// console.log(ans, typeof ans);



// 11. Array slice() and splice

// both splice and slice return a new array 
// slice() - used to copy 
// splice() - used to cut 

// let arr = [1,2,3,4,5];

// let ans1 = arr.slice(1,3);
// console.log(ans1,arr);
// here, (1,3) is (start index, end = end -1 index)


// let ans1 = arr.splice(1,3);
// console.log(ans1,arr);
// here, (1,3) is (start index, count value)
// means yaha 1 index tha 3 count tha to usne 3 value tak count kari i.e 2,3,4 and fir usko new array bana diya



// 12. Template Literals i.e ` ${variable name} `
// used to write static and dynamic arguments

// var name = "adarsh";

// console.log("my name is", name);
// console.log(`my name is ${name}`);



// 13. Function with Default Parameter

// here John is a default parameter jiski vjah se ab undefined nahi aaya terminal me

// function hello(name = "John") {
//     console.log(name);  
// }

// hello()
// hello("adarsh");




// 14. Callback and higher order funcction

// jo ja rha callback,
// jiske pas ja rha higher order function

// yaha, ye hai high order function
// function HOF(callback) {
//     console.log("hello from HOF func.");
//     callback();
//     console.log("byy from HOF func.");
// }

// // ye hai callback function
// function greet()  {
//     console.log("hello from callback func.");
// }

// HOF(greet);


// 15. Array higer order function methods

// let arr = [1,2,3,4,5];

// arr.map((element, index, arr, d)=>{
//     console.log(element, index, arr, d);
// })

// map()
// - is a higer order function
// - return a new array
// - size of input arr is equal to output arr

// let arr = [1,2,3,4,5];
// let ans = arr.map((el) => {
//     return el+5;
// })

// console.log(ans);


// forEach()
// - is a higer order function
// - return undefined
// - size of input arr is equal to output arr

// let arr = [1,2,3,4,5];
// let ans = arr.forEach((el) => {
//     return el+5;
// })

// console.log(ans);


// filter()
// - is a higer order function
// - return a new array
// - return that element which satisfy condition
// - size of input array is dynamic

// let arr = [1,2,3,4,5];
// let ans = arr.filter((el) => {
//     return el%2==0; // even cond
// })

// console.log(ans);


// sort()
// - is a higer order function
// - used to do arrangement

// let arr = [10,30,20,40,-3,4,-5];
// let ans = arr.sort((a,b) => b-a);

// console.log(ans);

// reduce()
// - is a array higer order function 
// - used to return single value as a result

// let arr = [1,2,3,4,5];
// let ans = arr.reduce((acc,el)=>{
//     return acc + el
// },0);

// console.log(ans, typeof ans);


// let arr = [1,2,3,4,5];
// let ans = arr.reduce((acc,el)=>{
//     return acc + el
// }, "");

// console.log(ans, typeof ans);



// include 
// simple isme ye hai value included hai to aya true agar nahi hai to aya false

// let arr = [1,2,3,4,5];

// console.log(arr.includes(3));
// console.log(arr.includes(6));



