const express=require("express");
const router=express.Router();
const patientController=require("../controller/doctorcontroller");
router.post("/createdoctor",patientController.createdoctor);
module.exports=router;