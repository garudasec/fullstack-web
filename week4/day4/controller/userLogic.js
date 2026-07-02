import employee from "../database/data.js";

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

const createUser = (req, res) => {
  const { name, email, empId } = req.body; // this is object destructuring

  if (!name || !email || !empId) {
    res.json({
      success: false,
      message: "should include the name,email and the empId",
    });
  }

  employee.push(name, email, empId);
  res.json({
    success: true,
    message: "User created successfully",
  });
};

const updateUser = (req, res) => {
  const { empId, newName } = req.body;

  if (!empId || !newName) {
    res.status(400).json({
      success: false,
      message: "needed empId and name",
    });
  }

  let user = employee.find((value) => value.empId === empId);

  if (!user) {
    res.json({
      success: false,
      message: "user doesn't exists",
    });
  }

  user.name = newName;

  res.json({
    data: employee,
    success: true,
    message: "user updated successfully",
  });
};


const deleteUser = (req,res) => {
    const {empId} = req.body;

    if (!empId) {
        res.status(400).json({
            success:false,
            message:"needed employee id"
        })
    }

    employee = employee.filter((value)=> value.empId!=empId)
    
    res.json({
        success:true,
        message: "user is delted"
    })
}

// iska api bnane ke liye isko export kar rhe hai ab and isko fir import karlenge routes/ me
export { getUser, createUser, updateUser , deleteUser };
