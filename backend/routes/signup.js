const express = require("express");
const User = require("../models/User");
const jwt = require("jsonwebtoken");
const router = express.Router();


router.post("/", async(request, response) => {
    try {
        const { name, email, password,role } = request.body;

        if(!name || !email || !password || !role){
            return response.status(400).json({ message: "All fields are required" });
        }

        if(!["admin", "employee"].includes(role)){
            return response.status(400).json({ message: "Invalid role" });
        }

        const existingUser = await User.findOne({ email });
        if(existingUser){
            return response.status(400).json({message: "User already exists"});
        }

        const user = new User({ name, email, password, role });
        await user.save();

        const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: "1d"});

        response.status(201).json({ message: "User registered successfully", token });
    }catch(error){
        response.status(500).json({ message: "Server error", error: error.message });
    }

});

module.exports = router;