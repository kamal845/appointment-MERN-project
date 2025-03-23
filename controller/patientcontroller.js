const express=require("express");
const patientsignupModel=require("../model/patient/patientsignupModel");
module.exports={
createpatient:async(req,res)=>{    
    try {
    const {name,age,email,password,address,role}=req.body;
  const existingPatient= await patientsignupModel.findOne({email});
  if(existingPatient){
    return res.json({
        statusCode:401,
        status:"error",
        message:"email already exist"
    })
  }
   const newPatient=new patientsignupModel({
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
    console.log(error);
    
    res.json({
        statusCode:500,
        status:"error",
        message:"Internal server error"
    })
}
}
}