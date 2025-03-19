const mongoose=require('mongoose');
const patientSchema=mongoose.Schema({
       patientId: {  // Unique identifier for the patient
       type: mongoose.Schema.Types.ObjectId,
       ref: "Patient",
       required: true
        },
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
        unique:true
    },
    password:{
        type:String,
        required:true,
        max:6
    },
    address:{
        type:String
    },
    role: {
        type: String,
        enum: ['doctor', 'patient'],
        default: 'patient',
        required: true
    }
},{timestamps:true});
module.exports=mongoose.model('Patient',patientSchema);