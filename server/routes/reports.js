const express = require('express');
const router = express.Router();
const Report = require('../models/Report');

// Dummy AI implementation as requested for the prototype
const analyzeGBVReport = (text) => {
    const keywords = ['assault', 'weapon', 'threat', 'injury', 'bleeding', 'hospital', 'violence'];
    let score = 10; // base score
    const lowerText = text.toLowerCase();

    let matchCount = 0;
    keywords.forEach(kw => {
        if (lowerText.includes(kw)) {
            matchCount++;
            score += 15;
        }
    });

    score = Math.min(score, 100);
    let analysis = "Standard review recommended.";
    if (score > 70) {
        analysis = "CRITICAL: High risk keywords detected. Immediate intervention recommended.";
    } else if (score > 40) {
        analysis = "WARNING: Moderate risk keywords detected. Prioritize investigation.";
    }

    return { score, analysis };
};

// Create a new report
router.post('/', async (req, res) => {
    try {
        const { title, description, location, incidentDate, mediaUrls } = req.body;

        // Perform simulated AI Analysis
        const { score, analysis } = analyzeGBVReport(title + " " + description);

        const newReport = new Report({
            title,
            description,
            location,
            incidentDate,
            mediaUrls: mediaUrls || [],
            aiRiskScore: score,
            aiAnalysis: analysis
        });

        const savedReport = await newReport.save();

        // Emit event to all connected clients for real-time updates
        req.io.emit('new_report', savedReport);

        res.status(201).json(savedReport);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Get all reports
router.get('/', async (req, res) => {
    try {
        const reports = await Report.find().sort({ createdAt: -1 });
        res.json(reports);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Get recent high risk reports
router.get('/high-risk', async (req, res) => {
    try {
        const reports = await Report.find({ aiRiskScore: { $gte: 70 } }).sort({ createdAt: -1 }).limit(10);
        res.json(reports);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Update report status
router.put('/:id/status', async (req, res) => {
    try {
        const { status } = req.body;
        const report = await Report.findByIdAndUpdate(req.params.id, { status }, { new: true });

        // Emit event for real-time update
        req.io.emit('report_updated', report);

        res.json(report);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
