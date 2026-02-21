const mongoose = require('mongoose');

const reportSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    incidentDate: {
        type: Date,
        required: true
    },
    status: {
        type: String,
        enum: ['Pending', 'Investigating', 'Resolved', 'Closed'],
        default: 'Pending'
    },
    mediaUrls: [{
        type: String
    }],
    aiRiskScore: {
        type: Number,
        default: 0
    },
    aiAnalysis: {
        type: String,
        default: "Pending Analysis"
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Report', reportSchema);
