
const express = require("express");
const router = express.Router();
const Admin = require("../models/Admin");
const bcrypt = require("bcryptjs");

console.log("Admin model:", Admin);

router.post("/register", async (request, response) => {
    console.log("resister rout hit")
    try{
        const { username, password }= request.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const newAdmin = new Admin({ username, password: hashedPassword });
        await newAdmin.save();
        response.status(201).json({ message: "Admin registered"})
    }catch(err){
        console.log(err)
        response.status(400).json({error: err.message})
    }
});


router.post("/login", async (request, response) => {
    try{
        const { username, password } = request.body;
        const admin = await Admin.findOne({ username });
        if(!admin) return response.status(400).json({ message: "Admin not found"});

        const isMatch = await bcrypt.compare(password, admin.password);
        if(!isMatch) return response.status(400).json({ message : "Invalid credentials"});

        response.json({ message: "Login successful"})
    }catch(err){
        response.status(400).json({error: err.message})
    }
});


module.exports = router;