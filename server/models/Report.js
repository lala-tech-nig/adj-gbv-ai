const mongoose = require('mongoose');

const reportSchema = new mongoose.Schema({
    title: { type: String, required: true },
    narrative: { type: String, required: false }, // Replaced 'description' with 'narrative'
    location: { type: String, required: false },
    incidentDate: { type: Date, required: false },
    // New fields from 6-step flow
    firstName: { type: String, required: false },
    lastName: { type: String, required: false },
    phone: { type: String, required: false },
    email: { type: String, required: false },
    address: { type: String, required: false }, // Explicit address field
    timeSlot: { type: String, required: false },
    contactMethod: { type: String, required: false },
    noPriorNotice: { type: Boolean, default: false },

    status: {
        type: String,
        enum: ['Pending', 'Investigating', 'Resolved', 'Closed'],
        default: 'Pending'
    },
    mediaUrls: [{ type: String }],
    aiRiskScore: { type: Number, default: 0 },
    aiAnalysis: { type: String, default: "Pending Analysis" },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Report', reportSchema);
