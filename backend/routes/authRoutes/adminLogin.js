const express = require('express');
const router = express.Router();
const Admin = require('../../models/Admin');
const bcrypt = require('bcrypt');
const { generateToken } = require('../../utils/tokenUtils');

router.post('/', async (req, res) => {
    try {
        console.log("Incoming login", req.body);


        const { email, password } = req.body;
        
        if (!email || !password) {
            return res.status(400).json({ message: 'Email and password are required' });
        }

        const admin = await Admin.findOne({ email });

        console.log("Admin foound in DB", admin);


        if (!admin) {
            return res.status(401).json({ message: 'Invalid credentials, admin not found' });
        }


        console.log("Entered password", password);
        console.log("Stored hash with DB:", admin.password);
        console.log("Password Match", await bcrypt.compare(password, admin.password));

        const isMatch = await bcrypt.compare(password, admin.password);
        

        
        if (!isMatch) {
            return res.status(401).json({ message: 'Invalid credentials, Password didnt match' });
        }

        if (admin.status !== 'active') {
            return res.status(403).json({ message: 'Admin account is not active' });
        }

        const token = generateToken({ id: admin._id, role: admin.role });
        admin.lastLogin = new Date();
        await admin.save();

        res.json({
            message: 'Login successful',
            token, 
            admin: {
                id: admin._id,
                username: admin.username,
                email: admin.email,
                role: admin.role
            }
        });
    } catch (error) {
        console.error('Login Error:', error);
        res.status(500).json({ message: 'Server error', error: error.message });
    }
});

router.post('/logout', (req, res) => {
    res.json({ message: 'Logout successful'})
});


module.exports = router;
