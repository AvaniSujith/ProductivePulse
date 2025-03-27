const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const Employee = require('../../models/Employee');
const { generateToken } = require('../../utils/tokenUtils');

router.post('/', async (req, res) => {
  try{
    const { email, password } = req.body;

    const employee = await Employee.findOne({ email });

    if(!employee){
      return res.status(401).json({ message: 'Invalid credential with given email.' });
    }

    const isMatch = await bcrypt.compare(password, employee.password);
    if(!isMatch){
      return res.status(401).json({ message: 'Invalid credential, wrong password' });
    }

    if(employee.status !== 'active'){
      return res.status(403).json({ message: 'Employee acount is not active' });
    }

    const token = generateToken({
      id: employee._id,
      role: employee.role
    });

    res.json({
      message: 'Login successful',
      token, 
      employee: {
        id: employee._id,
        firstName: employee.firstName,
        lastName: employee.lastName,
        email: employee.email,
        role: employee.role
      }
    });
  }catch(error){
    console.error('Employee login Error:', error)
    res.status(500).json({ message: 'Server error', error: error.message })
  }
});

router.post('/logout', (req, res) => {
  res.json({ message: 'logout successful'})
})

module.exports = router;