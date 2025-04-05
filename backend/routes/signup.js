const express = require("express");
// const User = require("../models/User");
const Admin = require("../models/Admin");
const Employee = require("../models/Employee");
const jwt = require("jsonwebtoken");
const router = express.Router();


router.post("/", async(request, response) => {
    try {
        const { firstName, lastName, email, password,role } = request.body;

        if(!firstName || !lastName || !email || !password || !role){
            return response.status(400).json({ message: "All fields are required" });
        }

        if(!["admin", "employee"].includes(role)){
            return response.status(400).json({ message: "Invalid role" });
        }

        // const existingUser = await User.findOne({ email });

        let user; 

        const  existingAdmin = await Admin.findOne({ email });
        const existingEmployee = await Employee.findOne({ email });

        if(existingAdmin || existingEmployee){
            return response.status(400).json({ message: "User already exits" });
        }

        if(role.toLowerCase() === "admin"){
            user = new Admin({ username: firstName + lastName, email, password })
        }else{
            user = new Employee({ firstName, lastName, email, password });
        }

        await user.save();

        const token = jwt.sign({ id: user._id, role: user.role.toLowerCase() }, process.env.JWT_SECRET, {
            expiresIn: "1d",
        });

        response.status(201).json({
            message:"User repsistered successfully ",
            token,
            user: {
                id_: user._id,
                email: user.email,
                role: role.toLowerCase(),
            }
        })
        // if(existingUser){
        //     return response.status(400).json({message: "User already exists"});
        // }

        // const user = new User({ firstName, lastName, email, password, role });
        // await user.save();

        // const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: "1d"});

        // response.status(201).json({ message: "User registered successfully", token });
    }catch(error){
        response.status(500).json({ message: "Server error", error: error.message });
    }

});

module.exports = router;