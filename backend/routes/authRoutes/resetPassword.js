const express = require('express');
const bcrypt = require('bcrypt');
const crypto = require('crypto');
const Admin = require('../../models/Admin');
const Employee = require('../../models/Employee');

const router = express.Router();

router.post('/:token', async (req, res) => {
    try{
        const { token } = req.params;
        const { newPassword, confirmPassword } = req.body;

        if(!newPassword || newPassword.length< 8){
            return res.status(400).json({ message: 'Password must be 8 char long'});
        }


        if(newPassword !== confirmPassword){
            return res.status(400).json({ message: 'Passwords do not match' })
        }
        
        const hashedToken = crypto.createHash('sha256').update(token).digest('hex');

        // const admin = await Admin.findOne({
        //     resetPasswordToken: token,
        //     resetPasswordExpires: { $gt: Date.now() }
        // });

        const user = await Admin.findOne({ resetPasswordToken: hashedToken, resetPasswordExpires: { $gt: Date.now() }}) || 
                     await Employee.findOne({ resetPasswordToken: hashedToken, resetPasswordExpires: { $gt: Date.now() }});
    
        // if(!admin){
        //     return res.status(400).json({ message: 'Invalid or expired token' });
        // }

        if(!user){
            return res.status(400).json({ message: 'Invalid or expired token' });
        }


        // console.log("New password before hashing:", newPassword);
        user.password = await bcrypt.hash(newPassword, 10);
        // console.log("New hashed password:", user.password);

        user.resetPasswordToken = null;
        user.resetPasswordExpires = null;

        await user.save();

        res.json({ message: 'Password has been reseted'});
    }catch(error){
        console.error('Reset Password Error ',error);
        res.status(500).json({ message: 'Server error', error: error.message });
    }
});

module.exports = router; 