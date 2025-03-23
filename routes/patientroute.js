const express=require("express");
const router=express.Router();
const patientController=require("../controller/patientcontroller");
router.post("/createpatient",patientController.createpatient);
module.exports=router;