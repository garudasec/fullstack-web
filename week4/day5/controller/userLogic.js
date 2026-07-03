import User from "../model/user.js";

const createUser = async (req, res) => {
  try {
    const { name, email, empId } = req.body;
    // validation
    if (!name || !email || !empId) {
      return res.status(404).json({
        message: "data not found",
      });
    }

    // data creation...
    const newUser = await User.create({ name, email, empId });
    console.log(newUser);

    // send response to user
    res.status(200).json({
      success: true,
      message: "data created successfully",
      newUser,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "data has not created!", error:error.message
    });
  }
};

// export default createUser

export { createUser }; // multiple cheej ko export karna hai toh ye use karte hai!
// isko hum object me export kar rahe hai!
