const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const Admin = require('../../models/Admin');
const { authenticateUser, requireAdmin } = require('../../middleware/authMiddleware');

router.post('/initial', async (req, res) => {
    try {
        const { username, email, password } = req.body;

    
        if (!username || !email || !password) {
            return res.status(400).json({ message: "All fields are required" });
        }


        const existingAdmins = await Admin.countDocuments();

        if (existingAdmins > 0) {
            return res.status(400).json({ 
                message: "Initial admin should be first user",
                details: "An admin already exists in the system"
            });
        }

        const existingAdmin = await Admin.findOne({
            $or: [{ email }, { username }]
        });

        if (existingAdmin) {
            return res.status(400).json({ message: 'Admin already exists' });
        }

       
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        console.log("hashed before saving", hashedPassword)

        
        const newAdmin = new Admin({
            username,
            email,
            password: hashedPassword,
            role: 'Admin',
            status: 'active',
            firstUser: true
        });

        await newAdmin.save();
        console.log("stored password in DB:", newAdmin.password)

        res.status(201).json({
            message: 'Initial admin created successfully',
            admin: {
                id: newAdmin._id,
                username: newAdmin.username,
                email: newAdmin.email
            }
        });
    } catch (error) {
        console.error('Initial Admin Signup Error:', error);
        res.status(500).json({ 
            message: 'Error creating admin', 
            error: error.message 
        });
    }
});

router.post('/', authenticateUser, requireAdmin, async (req, res) => {
    // router.post('/',  async (req, res) => {
    try{
        const { username, email, password } = req.body;

        if(!username || !email || !password){
            return res.status(400).json({ message: "All fields are required" });
        }

        const existingAdmin = await Admin.findOne({
            $or: [{ email }, { username }]
        });

        if(existingAdmin){
            return res.status(400).json({ message: 'Admin already exists '});
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newAdmin = new Admin({
            username,
            email, 
            password: hashedPassword,
            role: 'Admin',
            status: 'active'
        });

        await newAdmin.save();

        res.status(201).json({ 
            message: 'Admin created successfully',
            admin: {
                id: newAdmin._id,
                username: newAdmin.username,
                email: newAdmin.email
            }
        });
    }catch(error){
        res.status(500).json({ message: 'Error creating admin', error: error.message })
    }
});

module.exports = router;