import User from "../model/user.js";


// CREATE USER LOGIC
const createUser = async (req, res) => {
  try {
    const { name, email, empId } = req.body;
    // validation
    if (!name || !email || !empId) {
      return res.status(400).json({
        message: "data not found"
      });
    }

    // data creation...
    const newUser = await User.create({ name, email, empId });
    console.log(newUser);

    // send response to user
    res.status(201).json({
      success: true,
      message: "Employee created successfully",
      data: newUser
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "data has not created!", error:error.message
    });
  }
};



// GET USER LOGIC
const getUser = async (req,res) => {
  try {
    const users = await User.find();
    return res.status(200).json({
      success:true,
      data: users,
      message:"Employeess fetched successfully"
    })
    
  } catch (error) {
    return res.status(500).json({
      success:false,
      message: error.message
    })
  }
}


// PUT (UPDATE) LOGIC

const updateUser = async (req,res) => {
  try {
    const { empId, newName} = req.body;

    if (!empId || !newName) {
      return res.status(400).json({
        success: false,
        message: "All fields are required"
      })
    }

    const updatedUser = await User.findOneAndUpdate(
      {empId},
      {name: newName},
      {new: true}
    );

    if (!updatedUser) {
      return res.status(404).json({
        success:false,
        message: "Employee not found"
      })
    }

    return res.status(200).json({
      success: true,
      data: updatedUser,
      message: "Employeess updated successfully"
    })
    
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message
    })
    
  }
}


// DELETE USER LOGIC
const deleteUser = async (req, res) => {
  try {
    const { empId } = req.body;

    // validation
    if (!empId) {
      return res.status(400).json({
        success:false,
        message: "Employee ID is required"
      })
    }

    const deletedUser = await User.findOneAndDelete({ empId });

    if (!deletedUser) {
      return res.status(404).json({
        success: false,
        message: "Employee not found"
      })
    }

    return res.status(200).json({
      success: true,
      data: deletedUser,
      message: "Employee deleted successfully"
    })
    
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message
    })
    
  }
}












// export default createUser, getUser, updateUser, deleteUser

export { createUser, getUser, updateUser, deleteUser }; // multiple cheej ko export karna hai toh ye use karte hai!
// isko hum object me export kar rahe hai!
