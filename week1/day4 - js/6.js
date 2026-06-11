// interviews question 

// what is typecasting?

console.log(0 == false);
console.log((1>4) == "");
console.log(123 == "abc");
console.log(null== false);
console.log(undefined == false);
console.log((101>101) ==0);
console.log(NaN == NaN);
console.log("" == 1);


// "" <-> false <-> 0
// Inke alawa baaki sab Truthy hain:
// - false
// - 0 (zero)
// - "" (empty string)
// - null
// - undefined
// - NaN


// 4 Rules 

// 1. 0 <-> false and 1 <- true 
// 2. "" -> false -> 0 
// 3. null <-> undefined // these are loosely equall but agar kisi or ke sath dikha to false
// 4. NaN is never equal to anything even itself 