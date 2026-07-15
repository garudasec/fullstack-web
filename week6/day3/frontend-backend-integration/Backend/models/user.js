import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: [true, "Email is required"], 
      unique: true,
      lowercase: true,
      trim: true,
      match: [/^\S+@\S+\.\S+$/, "Please enter a valid email"],
    },
    password: {
      type: String,
      required: [true, "Password is required"], 
      minlength: [8, "Password must be at least 8 characters"],
      select: false, 
    },
    name: {
      type: String,
      required: [true, "Name is required"], 
      trim: true,
      minlength: [2, "Name must be at least 2 characters"],
      maxlength: [50, "Name cannot exceed 50 characters"],
    },
    role: {
      type: String,
      enum: {
        values: ["Admin", "Student", "Teacher"],
        message: "Role must be Admin, Student, or Teacher",
      },
      default: "Student",
    },
  },
  {
    timestamps: true, //  Adds createdAt and updatedAt automatically
  }
);

userSchema.index({ email: 1 });

const User = mongoose.model("User", userSchema);

export default User;   