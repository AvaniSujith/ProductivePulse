const express = require("express");
const router = express.Router();
const Employee = require("../models/Employee");



router.get("/", async (request, response) => {
    try{
        const employees = await Employee.find();
        response.json(employees);
    } catch(err){
        response.status(500).json({ error: err.message });
    }
});

router.post("/", async (request,response) => {
    try{
        const { name, email, position } = request.body;
        const newEmployee = new Employee({ name, email, position });
        await newEmployee.save();
        response.status(201).json(newEmployee)
    }catch(err){
        response.status(400).json({ error: err.message });
    }
});



router.put("/:id/attendace", async (request, response) => {
    try{
        const { status } = request.body;
        const employee = await Employee.findById(request.params.id);
        if(!employee) return response.status(404).json({ message: "Employee not found"});

        employee.attendance.push({ status });
        await employee.save();
        response.json(employee)
    } catch(err){
        response.status(400).json({ error: err.message })
    }
});

module.exports = router; 