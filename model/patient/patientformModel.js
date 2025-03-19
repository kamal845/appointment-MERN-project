const mongoose=require('mongoose');
const patientSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    age:{
        type:Number
    },
    email:{
        type:String,
        required:true,
    },
    phone:{
        type:String
    },
    enquiry:{
        type:String
    }
},{timestamps:true});
module.exports=mongoose.model('Patient', patientSchema);