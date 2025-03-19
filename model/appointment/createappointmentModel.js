const mongoose = require("mongoose");

const createAppointmentSchema = new mongoose.Schema({
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
    requestedDate: { 
        type: Date,
        required: true
    },
    slotTime: {  
        type: String,
        required: true
    },
    reasonForVisit: {  
        type: String,
        required: true
    },
    status: {  // Tracks appointment request status
        type: String,
        enum: ['pending', 'approved', 'rejected'],
        default: 'pending'
    },
    notified: {  // Tracks if a notification has been sent
        type: Boolean,
        default: false
    },
    createdAt: { type: Date, default: Date.now }
}, { timestamps: true });

createAppointmentSchema.index({ doctorId: 1, requestedDate: 1, slotTime: 1 }, { unique: true });

module.exports = mongoose.model("CreateAppointment", createAppointmentSchema);
