const express = require('express');
const router = express.Router();
const Report = require('../models/Report');
const multer = require('multer');
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const cloudinary = require('cloudinary').v2;
require('dotenv').config();

// Base config for Cloudinary if available, otherwise fallback
if (process.env.CLOUDINARY_CLOUD_NAME) {
    cloudinary.config({
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
        api_key: process.env.CLOUDINARY_API_KEY,
        api_secret: process.env.CLOUDINARY_API_SECRET
    });
}

const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: 'adj_gbv_evidence',
        resource_type: 'auto',
        allowed_formats: ['jpg', 'png', 'jpeg', 'mp4', 'mp3', 'wav', 'pdf', 'webm', 'mov', 'm4a', 'heic'],
    },
});
const upload = multer({ storage: storage });

// Upload Endpoint
router.post('/upload-evidence', (req, res) => {
    upload.array('images', 5)(req, res, function (err) {
        if (err) {
            console.error("Multer/Cloudinary Error:", err);
            return res.status(500).json({ message: err.message || "File upload failed" });
        }

        try {
            if (!req.files || req.files.length === 0) {
                return res.status(400).json({ message: "No files provided." });
            }
            const urls = req.files.map(f => f.path);
            res.status(200).json({ urls });
        } catch (error) {
            console.error("Post-upload Error:", error);
            res.status(500).json({ message: error.message });
        }
    });
});

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
        const {
            title, narrative, location, incidentDate, mediaUrls,
            firstName, lastName, phone, email, timeSlot, contactMethod, noPriorNotice
        } = req.body;

        // Perform simulated AI Analysis
        const textToAnalyze = (title || "") + " " + (narrative || "");
        const { score, analysis } = analyzeGBVReport(textToAnalyze);

        const newReport = new Report({
            title,
            narrative,
            location,
            incidentDate,
            firstName,
            lastName,
            phone,
            email,
            timeSlot,
            contactMethod,
            noPriorNotice,
            mediaUrls: mediaUrls || [],
            aiRiskScore: score,
            aiAnalysis: analysis
        });

        const savedReport = await newReport.save();

        if (req.io) {
            req.io.emit('new_report', savedReport);
        }

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

        if (req.io) {
            req.io.emit('report_updated', report);
        }

        res.json(report);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
