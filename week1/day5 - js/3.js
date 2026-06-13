// Arrays

// CRUD Operations

// 1. Create
var arr = [];
arr = [1,2,3]


// 2. Read
console.log(arr, typeof arr)
// Read specific position/index value
console.log(arr[0])


// 3. Update - used to add
// to add RHS/ending  (push)
arr.push(100);
console.log(arr);

// to add LHS/starting (unshift)
arr.unshift(50);
console.log(arr);

arr[2] = 200;
console.log(arr);


// 4. Delete - used to delete
//RHS pop()
arr.pop();
console.log(arr);

//LHS shift()
arr.shift();
console.log(arr);

