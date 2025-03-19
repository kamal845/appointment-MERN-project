const mongoose=require("mongoose");
const loginDSchema=new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    password:{
        type:String
    },
    phone:{
        type:String,
        required:true 
    },
    otp:{
        type:Number
    }

},{timestamps:true});
module.exports=mongoose.model("loginDoctor",loginDSchema);