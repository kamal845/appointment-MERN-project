const express = require("express");
const app = express();
const dotenv = require("dotenv");
const connectDB = require('./database/database');
const middleware=require("./middleware/middleware");
// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// API Routes
app.use(middleware);
dotenv.config();
const port = process.env.PORT || 4000;

// Connect to MongoDB
connectDB();

app.listen(port, () => {
    console.log(`server is started ${port}`);
});







// Objective:
// Design a backend system that efficiently manages missed
// appointments, identifies suitable rescheduling slots, and facilitates rebooking seamlessly.
// * Key Features:
// 1. Automatic Detection: Detect no-shows after a 15-minute grace period.
// 2. Slot Finder: Identify available slots in the doctor's schedule dynamically.
// 3. Notification System: Notify patients with rescheduling options via email/SMS.
// 4. Rebooking Management: Allow doctors and patients to confirm new slots quickly.
// 5. Conflict Resolution: Ensure no double-booking for rescheduled appointments