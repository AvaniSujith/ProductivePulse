const express = require("express");
const Leave = require("../models/Leave");
const { authenticateUser } = require("../middleware/authMiddleware");
const router = express.Router();

router.post("/request", authenticateUser, async(request, response) => {
    try{
        const { category, startDate, endDate, reason } = request.body;

        const newLeave = new Leave({
            employeeId: request.user.id,
            category,
            startDate,
            endDate,
            reason
        });


        await newLeave.save();
        response.status(201).json({ message: "Leave request submitted successfully!", leave:newLeave});
        
    }catch(error){
        response.status(500).json({ message: "Error submittinf Leave request", error: error.message})
    }
});

router.get("/", authenticateUser, async(request, response) => {
    try{
        const leaves = await Leave.find({ employeeId: request.user.id });
        response.status(200).json(leaves)

    }catch(error){
        res.status(500).json({ message: "Error fetching leaves requests", error: error.message });
    }
});

module.exports = router;