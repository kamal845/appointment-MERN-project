const express=require("express");
const doctorsignupModel=require("../model/doctor/signupDoctorModel");
module.exports={
createdoctor:async(req,res)=>{    
    try {
    const {name,age,email,password,address,role}=req.body;
  const existingPatient= await doctorsignupModel.findOne({email});
  if(existingPatient){
    return res.json({
        statusCode:401,
        status:"error",
        message:"email already exist"
    })
  }
   const newPatient=new doctorsignupModel({
    name,
    age,
    email,
    password,
    address,
    role:role || 'patient'
   })
   const savedPatient=await newPatient.save();
   return res.json({
    statusCode:201,
status:"Success",
message:"Patient created successfully",
data:savedPatient
   })
} catch (error) {
    res.json({
        statusCode:500,
        status:"error",
        message:"Internal server error"
    })
}
}
}