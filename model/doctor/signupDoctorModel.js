const mongoose = require("mongoose");
const signupDSchema = new mongoose.Schema({
    doctorId: {  // Unique identifier for the patient
    type: mongoose.Schema.Types.ObjectId,
    ref: "Doctor", // Reference to Patient model
    required: true
        },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        max: 6,
    },
    role: {
        type: String,
        enum: ['doctor', 'patient'],
        default: 'doctor',
        required: true
    }
}, { timestamps: true });

module.exports = mongoose.model('SignupDoctor', signupDSchema);
