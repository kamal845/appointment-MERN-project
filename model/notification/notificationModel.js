const mongoose = require("mongoose");

const notificationSchema = new mongoose.Schema({
    patientId: { 
    type: mongoose.Schema.Types.ObjectId,
     ref: "Patient", 
     required: true 
    },
    doctorId: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: "Doctor",
    required: true
 },
    type: {
    type: String,
    enum: ["email", "sms"],
     required: true 
    },
    message: {
    type: String,
    required: true
    },
    sentAt: { type: Date, default: Date.now }
}, { timestamps: true });

module.exports = mongoose.model("Notification", notificationSchema);
