// loops in object

let obj = {
    name: "addyy",
    age: 26,
    status: true,
    email: "code@gmail.com"
}


// in case of loop .notation does not works
for (let key in obj) {
    console.log(key, typeof key)
    // console.log(key, obj.key) //will not work
    // console.log(key, obj["key"]) //will not work
    console.log(key, obj[key])

}