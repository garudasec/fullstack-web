import User from "../models/user.model.js";
import jsonwebtoken from "jsonwebtoken";
import bcrypt from "bcrypt";

const registerUser = async (req, res) => {
    try {
        let { name, email, password } = req.body;

        if (!name || !email || !password) {
            return res.status(400).json({
                message: "Data not found for user creation..",
                success: false,
            });
        }

        let existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(409).json({
                message: "User already exist with this email",
                success: false,
            });
        }

        let hashpassword;

        try {
            hashpassword = await bcrypt.hash(password, 10);
        } catch (error) {
            return res.status(400).json({
                success: false,
                message: "Could not hash password...",
            });
        }

        let user = await User.create({
            name,
            email,
            password: hashpassword
        });

        res.status(201).json({
            success: true,
            message: "User created successfully..."
        });
        
    } 
    catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal server error",
            error,
        });
    }
};

const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: "data not found for login....",
            });
        }

        let user = await User.findOne({ email });

        if (!user) {
            return res.status(401).json({
                success: false,
                message: "user not found  by this  email id ...",
            });
        }

        if (await bcrypt.compare(password, user.password)) {
            let token = jsonwebtoken.sign({ userId: user._id }, "studentKey", {
                expiresIn: "3d",
            });

            res.status(200)
                .json({
                    success: true,
                    token,
                    message: "User logged in successfully..."
                });
        } else {
            return res.status(401).json({
                message: "invalid password..",
                success: false,
            });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: "failed to login",
            error,
        });
    }
};


export { registerUser, loginUser};