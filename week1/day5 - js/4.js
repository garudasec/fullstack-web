// loops in arrays

var arr = [10,20,30,40,50];

for (let i=0; i<arr.length; i++) {
    // console.log("index value: ", i, "Arr value: ", arr[i]);
    console.log(`index value: ${i} Arr value: ${arr[i]}`)
}


// for ... of loop
// here let val of arr means go to arr and give me the all values 

for (let val of arr) {
    console.log(val)
}   