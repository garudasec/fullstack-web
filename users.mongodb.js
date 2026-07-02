use("users")

//this is create operation

// db.employees.insertOne(
//   {
//     name: "John Doe",
//     age: 25,
//     salary: 50000,
//     email:"john.doe@example.com"
//   }
// )



// db.employees.insertMany([
//   {
//     name: "aman rathore",
//     age: 30,
//     salary: 60000,
//     email: "aman.rathore@gmail.com"
//   },
//   {
//     name: "aman rathore",
//     age: 30,
//     salary: 60000,
//     email: "amanrathore@gmail.com"
//   },
//   {
//     name: "sachin",
//     age: 28,
//     salary: 55000,
//     email: "sachin@gmail.com"
//   },
//   {
//     name: "rahul",
//     age: 35,
//     salary: 70000,
//     email: "rahul@gmail.com"
//   },
//   {
//     name: "rohit",
//     age: 32,
//     salary: 65000,
//     email: "rohit@gmail.com"
//   }
// ])



// this is read operation

// findOne - to get one document from the collection
// db.employees.findOne({
//   name:"sachin"
// })

// // find - to get all documents from the collection
// db.employees.find({
//   name:"sachin"
// })



// this is update operation

// updateOne - to update one document from the collection
// db.employees.updateOne(
//   { name: "sachin" },  // this one for find
//   { $set: { salary: 60000000 } }  // this one for update
// )


// updateMany - to update many documents from the collection
// db.employees.updateMany(
//   { age: 32}, // this one for find
//   { $set: { email: "agehogyi32hahaha@gmail.com"}} // this one for update
// )


// this is delete operation

// deleteOne - to delete one document from the collection
// db.employees.deleteOne({
//   name: "sachin"
// })


// deleteMany - to delete many documents from the collection
db.employees.deleteMany({
  age: 32
})