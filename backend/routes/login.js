// const express = require("express");
// const User = require("../models/User");
// const jwt = require('jsonwebtoken');
// const bcrypt = require("bcrypt");

// dotenv.config();
// const router = express.Router()

// router.post("/login", async (request, response)=> {
//     try{
//         const {email, password} = request.body;

//         if(!email || !password){
//             return response.status(400).json({ message:"Email and password are required"});
//         }

//         const user = await User.findOne({email});
//         if(!user){
//             return response.status(401).json({message: "Invalid credentials"});
//         }

//         const isMatch = await bcrypt.compare(password, user.password);
//         if(!isMatch){
//             return response.status(401).json({ message:"Invalid credentials"});
//         }

//         const accessToken = jwt.sign(
//             {id: user._id, role: user.role },
//             process.env.JWT_SECRET,
//             { expiresIn: "15m"}
//         );

//         const refreshToken = jwt.sign(
//             { id: user._id},
//             process.env.JWT_SECRET,
//             {expiresIn : "7d" }
//         );

//         user.refreshToken = refreshToken;
//         await user.save();

//         response.cookie("refreshToken", refreshToken, {
//             httpOnly: true,
//             secure: process.env.NODE_ENV === "production",
//             sameSite: "Strict",
//             maxAge: 7*24*60*60*1000 // 7 days
//         });

//         response.status(200).json({message: "Login successful", accessToken, role: user.role });
//     }catch(error){
//         response.status(500).json({ message: "Server error", error: error.message});
//     }
// });

// module.exports = router;


const express = require("express");
// const User = require("../models/User");
const Admin = require('../models/Admin');
const Employee = require('../models/Employee')
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const dotenv = require("dotenv");

dotenv.config();
const router = express.Router();

router.post("/", async (request, response) => {
    try {
        console.log("Recievded reques", request.body)
        const { email, password } = request.body;

        if (!email || !password) {
            return response.status(400).json({ message: "Email and password are required" });
        }

        // const user = await User.findOne({ email });
        const user = await Admin.findOne({ email }) || await Employee.findOne({ email });

        if (!user) {
            return response.status(401).json({ message: "Invalid credentials" });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return response.status(401).json({ message: "Invalid credentials" });
        }

        const accessToken = jwt.sign(
            { id: user._id, role: user.role.toLowerCase() },
            process.env.JWT_SECRET,
            { expiresIn: "15m" }
        );

        const refreshToken = jwt.sign(
            { id: user._id },
            process.env.REFRESH_SECRET, 
            { expiresIn: "7d" }
        );

        user.refreshToken = refreshToken;
           // await user.save();
        await user.save({ validateBeforeSave: false });

        response.cookie("refreshToken", refreshToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "Strict",
            maxAge: 7 * 24 * 60 * 60 * 1000 
        });

        response.status(200).json({ message: "Login successful", accessToken, role: user.role });
    } catch (error) {

        console.error("login Error", error);

        response.status(500).json({ message: "Server error", error: error.message });
    }
});

module.exports = router;
