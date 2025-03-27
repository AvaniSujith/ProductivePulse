const express = require('express');
const router = express.Router();
const Employee = require('../../models/Employee');
const { authenticateUser, requireAdmin } = require('../../middleware/authMiddleware');

router.post('/', authenticateUser, requireAdmin, async (req, res) => {
  try{
    const{ firstName, lastName, email, password, dateOfJoining } = req.body;

    const existingEmployee = await Employee.findOne({ email });

    if(existingEmployee) {
      return res.status(400).json({ message: 'Employee already exists' });
    }

    const newEmployee = new Employee({
      firstName,
      lastName,
      email,
      password,
      dateOfJoining: dateOfJoining || new Date(),
      status: 'active',
      role: 'Employee'
    });

    await newEmployee.save();

    res.status(201).json({
      message: 'Employee created successfully',
      employee: {
        id: newEmployee._id,
        firstName: newEmployee.firstName,
        lastName: newEmployee.lastName,
        email:newEmployee.email
      }
    });
  }catch(error){
    console.error('Employee Signup Error', error);
    res.status(500).json({ message: 'Error while creating new Employee', error: error.message});
  }
});

module.exports = router;