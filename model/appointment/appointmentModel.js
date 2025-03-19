const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema({
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
    appointmentDate: {  
        type: Date,
        required: true
    },
    slotTime: {
        type: String,
        required: true
    },
    checkedIn: {
        type: Boolean,
        default: false
    },
    noShow: { 
        type: Boolean,
        default: false
    },
    reschedule: {  
        type: Boolean,
        default: false
    },
    previousAppointmentId: {  
        type: mongoose.Schema.Types.ObjectId,
        ref: "Appointment",
        default: null
    },
    notified: {
        type: Boolean,
        default: false
    },
    paymentStatus: {
        type: String,
        enum: ['pending', 'approved', 'cancelled'],
        default: 'pending'
    },
    appointmentStatus: {  
        type: String,
        enum: ['pending', 'confirmed', 'completed', 'cancelled'],
        default: 'pending'
    }
}, { timestamps: true });
appointmentSchema.index({ doctorId: 1, appointmentDate: 1, slotTime: 1 }, { unique: true });

module.exports = mongoose.model("Appointment", appointmentSchema);
