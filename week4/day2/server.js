import express from "express";

// here we created server with the help of expressJS

// yaha expression function tha isliye humne isko call kara hai.
// and ye express function object return krega jo humne app me store kardiya

const app = express();
const port = 4000;

app.use(express.json());

// yaha API create kari hai

// api - /
// app.get("/", (req, res) => {
//   res.send("<h1>Welcome to the Backend!!</h1>");
// });
// // api - /about
// app.get("/about", (req, res) => {
//   res.send("<h1>About Page</h1>");
// });
// // api - /contact
// app.get("/contact", (req, res) => {
//   res.send("<h1>Contact Page</h1>");
// });
// // api - /page/job
// app.get("/page/job", (req, res) => {
//   res.send("<h1>Job Page</h1>");
// });
// // api - /page/contact
// app.get("/page/contact", (req, res) => {
//   res.send("<h1>Contact Page</h1>");
// });

// total bas yhi 4 request hai

// app.get() -> send/get

// let students = ['ankit', 'rahul', 'priya']

let users = ['ankit', 'rahul', 'priya', 'rajesh', 'sneha', 'pankaj'];



// app.get() operations........
app.get("/getUser", (req, res) => {    //getUser yaha endpoint hai
  
  
  
  // jab bhi frontend to backend or backend to frontend data bhejna hoga to hum res.json() ka use karenge
  res.json({
    data: users,
    success: true,
    message: "data fetched successfully",
  });
});



// app.post() -> create

// app.post() operations........
app.post("/createUser", (req, res) => {
  const name = req.body.name;

  // users.push({ name});
  users.push(name);

  console.log(users);

  res.json({
    data: users,
    success: true,
    message: "data created successfully"
  });
});


// app.put()  -> 

// app.put() operations........
app.put("/updateUser", (req,res) => {
  
  const {name, newName} = req.body;
  let index = users.indexOf(name);

  users[index] = newName;

  res.json({
    data: users,
    success: true,
    message: "data updated successfully"
  })
})



// app.delete() -> delete

app.delete('/deleteUser', (req,res) => {
  const {name} = req.body
  
  const index = users.indexOf(name)

  users.splice[index,1]
  res.json({
    data:users,
    success: true,
    message: 'user deleted succesfully'
  })
})
















// ab server listen krega
app.listen(port, () => {
  console.log("server is running in port: ", port);
  console.log(users);

});
