// Asynchronous Programming(Welcome to Advance concept of Js)

// 0. Asynchronous progg. vs synchronous progg
// synchro - top to bottom, left to right , line by line execution also execute immediately
// asyncho - flow of code is decided by interpreter, execute after some delay

// 0.5 interpreted Progg language - convert from high to low, line by line
//1. Dynamically Type Programming Language - 

// var x  = 10;
// console.log(x, typeof x);

// x = true;
// console.log(x, typeof x);

// x = "hello";
// console.log(x, typeof x);



//2. Hoisting - 
// var -> undefined
// regular fn will also allot M/E

// console.log(name); // un
// console.log(age); // un

// var name = "chintu";
// let age = 10;

// console.log(name); // c
// console.log(age); // 10

// byy() // un
// hii() // err
// function hii(){
//     console.log(1);

// }
// // byy() // un
// // hii() // err
// const byy = ()=>{
//     console.log("2");

// }
// byy() // 
// hii() //



//3. Lexical Scope in JS - visibility/accesibility
// var - function scope
// let and const - block scope


// hello()
// function hello(){
//     console.log(name); // un
//     console.log("age"); // err hoisting

//     if(101){
//         var name = "ram";
//         let age = 10;
//           console.log(name); // rm
//           console.log(age); // 10
//     }
//     console.log(name); // ram
//     console.log(age); // err scope

// }



//4.  Execution Context - run time environment for JS
// when we run any code, global execution  context formed
// has two phase - memore phase and execution phase
// function ke liye dobara globa execution context banta hai jab execute ho jayga, to vo context delete ho jayga

// console.log("start");
// console.log(one());

// function three(){
//     return "hello from fn 3"
// }

// function one(){
//     console.log(name);
//     var name = "chintu";
//     three()
//     console.log(name); 
// }
// console.log("mid");
// two();


// function two(){
//     console.log("error");
//     let age = 10;
//     console.log(age);
//     console.log(three())  
// }

// console.log("End");



// 5. Timer 

// two types of timer
// setTimeout
// setInterval

// console.log("start");

// // run only 1 time
// setTimeout(() => {
//     console.log("hello");
// }, 5000);

// // run after interval again and again
// setInterval(() => {
//     console.log("byy");
// }, 2000);

// console.log("end");



// //6. Event Loop - to understand how async code is executed

// console.log("start");

// setTimeout(() => {
//     console.log(two());
//     three();
// }, 5000);

// function one() {
//     return 1
//     three();
//     console.log("hello from one fn");
// }

// console.log("mid");

// function two() {
//     console.log(name);
//     var name = "ram";
//     console.log(name);
//     console.log(three());
//     console.log("hello from two fn");
//     return 2   
// }

// setInterval(() => {
//     three()
// }, 10000);


// function three() {
//     console.log("hello from 3 fn");
//     return 3   
// }

// setTimeout(() => {
//     console.log(one());
// }, 0);

// console.log("end");



// 7. Closures ---> encapsulation , func + its lexical scope

// function outer() {
//     let count = 0;

//     return function inner() {
//         count++
//         console.log(count);
//     }
// }

// let ans = outer();
// console.log(ans());
// console.log(ans());
// console.log(ans());



// 8. Curring - chaining of a function

function add(a) {
    return function (b) {
        return function (c) {
            return function (d) {
                return a+b+c+d
            }
        }
    }
}

// let ans = add(1)(2)(3)(4);
// console.log(ans);

let ans = a=>b=>c=>d=>a+b+c+d;
console.log(ans(1)(2)(3)(4))


// Debouncing and throttling