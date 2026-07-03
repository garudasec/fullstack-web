import mongoose from "mongoose";


const user = new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    empId:{
        type:Number,
        require:true
    }
})


const User = mongoose.model(user, 'User')


export default User