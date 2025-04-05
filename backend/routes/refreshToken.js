const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
// const User = require("../models/User");
const Admin = require('../models/Admin');
const Employee = require('../models/Employee');
const dotenv = require('dotenv');

dotenv.config();
const { authenticateUser, generateAccessToken } = require('../utils/tokenUtils');

router.post('/refresh', async (request,response) => {
    try{
        const refreshToken = request.cookies?.refreshToken || request.body.refreshToken;
        if(!refreshToken){
            return response.status(401).json({ message: 'Refresh token missing' });
        }

        // const user = await User.findOne({ refreshToken });
        const user = await Admin.findOne({ refreshToken }) || await Employee.findOne({ refreshToken })
        if(!user){
            return response.status(403).json({ message: "Invalid refresh token" });
        }
    
        const decoded = authenticateUser(refreshToken, process.env.REFRESH_SECRET);
        if(!decoded){
            return response.status(403).json({ message: 'Invalid or expired refresh token' });
        }
    
        // const newAccessToken = generateAccessToken({ _id: decoded.id, role: decoded.role });

        const newAccessToken = generateAccessToken({ _id: decoded.id, role: user.role.toLowerCase() })
        // return response.json({ accessToken: newAccessToken })

        return response.json({
            user:{
                _id:user._id,
                name: user.name,
                email: user.email,
                role: user.role
            },
            accessToken: newAccessToken
        });
    }catch(error){
        return response.status(500).json({ message: "Server error", error: error.message});
    }
});

module.exports = router;