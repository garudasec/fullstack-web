// object

// datatype ko padhne ke liye sirf crud aana chaiye

// 1. Create

let obj = {};
obj = {
    id: 26,
    name: "adarsh",
    hobby: ["boxing", "sleeping", "coding"],
    status: false,
    address: {
        city: "gurugram",
        state: "haryana",
        country: "india",
    },
};

// 2. Read
console.log(obj, typeof obj);

//there are two types of method to access value in object!
    // bracket notation ex. obj["key"]
    // dot notation ex. obj.key

// 3. Update
obj["status"] = true;
obj.name = "vaibhav"

// create a new key value pair
obj.email = "coder@gmail.com"

console.log(obj);

// 4. Delete
delete obj["email"]
delete obj.id

console.log(obj);


