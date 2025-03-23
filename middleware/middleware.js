const express=require("express");
const app=express();
const patientRoutes=require("../routes/patientroute");
const doctorRoutes=require("../routes/doctorroute");
app.use("/api/v1/patient",patientRoutes);
app.use("/api/v1/doctor",doctorRoutes);
module.exports=app;