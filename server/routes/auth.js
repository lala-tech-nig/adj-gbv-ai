const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

// A simple admin login route. For production, use DB and bcrypt.
router.post('/login', (req, res) => {
    const { username, password } = req.body;

    // Use environment variables for credentials or default to admin/admin
    const adminUser = process.env.ADMIN_USERNAME || 'admin';
    const adminPass = process.env.ADMIN_PASSWORD || 'securepassword';

    if (username === adminUser && password === adminPass) {
        const token = jwt.sign(
            { role: 'admin' },
            process.env.JWT_SECRET || 'adjsupersecretkey',
            { expiresIn: '12h' }
        );
        res.json({ token, message: "Login successful" });
    } else {
        res.status(401).json({ message: "Invalid credentials" });
    }
});

module.exports = router;
