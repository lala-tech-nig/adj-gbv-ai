const express = require('express');
const router = express.Router();
const Report = require('../models/Report');

// Get generic dashboard statistics
router.get('/', async (req, res) => {
    try {
        const totalReports = await Report.countDocuments();
        const pendingReports = await Report.countDocuments({ status: 'Pending' });
        const resolvedReports = await Report.countDocuments({ status: 'Resolved' });

        // Aggregate reports by month
        const monthlyData = await Report.aggregate([
            {
                $group: {
                    _id: { $month: "$createdAt" },
                    count: { $sum: 1 }
                }
            },
            { $sort: { _id: 1 } }
        ]);

        // High risk aggregate
        const highRiskReports = await Report.countDocuments({ aiRiskScore: { $gte: 70 } });

        // Aggregate reports by location
        const locationData = await Report.aggregate([
            {
                $group: {
                    _id: "$location",
                    count: { $sum: 1 }
                }
            },
            { $sort: { count: -1 } },
            { $limit: 5 }
        ]);

        // Aggregate risk distribution
        const criticalRisk = await Report.countDocuments({ aiRiskScore: { $gte: 70 } });
        const elevatedRisk = await Report.countDocuments({ aiRiskScore: { $gte: 40, $lt: 70 } });
        const baselineRisk = await Report.countDocuments({ aiRiskScore: { $lt: 40 } });

        res.json({
            totalReports,
            pendingReports,
            resolvedReports,
            highRiskReports,
            monthlyData,
            locationData,
            riskDistribution: {
                critical: criticalRisk,
                elevated: elevatedRisk,
                baseline: baselineRisk
            }
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
