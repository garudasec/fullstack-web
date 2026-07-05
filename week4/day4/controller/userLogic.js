// controller logic for employee data
// this file contains the logic handlers that will be used in the routes to handle the requests and responses

import employee from "../database/data.js";

// GET -> fetch all employee data
const getUser = (req, res) => {
  try {
    res.status(200).json({
      data: employee,
      success: true,
      message: "data fetched successfully...",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "failed to get data",
      error,
    });
  }
};

// POST -> create a new employee
const createUser = (req, res) => {
  const { name, email, empId } = req.body; // object destructuring of request body to get the name,email and empId

  // validation: to check all required fields are present or not
  if (!name || !email || !empId) {
    return res.status(400).json({
      success: false,
      message: "All fields are required",
    });
  }

  // create employee object
  const newEmployee = {
    name,
    email,
    empId,
  };

  employee.push(newEmployee); // push the new employee object to the employee array

  res.status(201).json({
    success: true,
    message: "User created successfully",
    data: employee,
  });

  console.log(req.body);
};

// PUT -> update an existing employee

const updateUser = (req, res) => {
  const { empId, newName } = req.body;

  // validation:
  if (!empId || !newName) {
    return res.status(400).json({
      success: false,
      message: "Required fields are missing",
    });
  }

  // find employee
  const user = employee.find((value) => value.empId == empId);

  // validation: employee exist?
  if (!user) {
    return res.status(404).json({
      success: false,
      message: "Employee not found",
    });
  }

  // yaha simple update kara hai humne
  user.name = newName;

  res.status(200).json({
    data: employee,
    success: true,
    message: "Employee updated successfully",
  });
};

// DELETE -> delete an existing employee

const deleteUser = (req, res) => {
  const { empId } = req.body;

  // phle index find karna hai ki kya delete karna hai
  const index = employee.findIndex((value) => value.empId == empId);

  // validation: employee exist?
  if (index === -1) {
    return res.status(404).json({
      success:false,
      message:"Employee not found"
    })
  }

  // delete emplooyee
  employee.splice(index,1);

  res.status(200).json({
    success:true,
    data:employee,
    message:"EMployee deleted successfully"
  })

  res.json({
    success: true,
    message: "user is delted",
  });
};

// exporting controller function so that we can use it in the routes
export { getUser, createUser, updateUser, deleteUser };
