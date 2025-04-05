const express = require('express');
const crypto = require('crypto');
const Admin = require('../../models/Admin');
const Employee = require('../../models/Employee');
const sendEmail = require('../../utils/sendEmail');

const router = express.Router();

router.post("/", async (req, res) => {
    try{
        const { email } = req.body;
        if(!email){
            return res.status(400).json({ message: 'Email is required' });
        }

        let user = await Admin.findOne({ email }) || await Employee.findOne({ email });

        if(!user){
            return res.status(404).json({ message: 'User not found'})
        }

        // const admin = await Admin.findOne({ email });
        // if(!admin) {
        //     return res.status(404).json({message: 'Admin not found' });
        // }

        // const resetToken = crypto.randomBytes(32).toString('hex');
        // admin.resetPasswordToken = resetToken;
        // admin.resetPasswordExpires = Date.now() + 3600000;

        const resetToken = crypto.randomBytes(32).toString('hex');
        const hashedToken = crypto.createHash('sha256').update(resetToken).digest('hex');

        // user.resetPasswordToken = resetToken;
        user.resetPasswordToken = hashedToken;
        user.resetPasswordExpires = Date.now() + 3600000;

        // await admin.save();
        await user.save();

        const resetURL = `http://localhost:5000/reset-password/${resetToken}`;
        const emailContent = `<p>Click <a href="${resetURL}">here</a> to reset your password.</p>`;

        // await sendEmail(admin.email, 'Password reset request', emailContent);

        await sendEmail(user.email, 'Password reset request', emailContent);

        res.json({ message: 'Password reset link sent to your email' });

    }catch(error){
        console.error('Forgot Password error', error);
        res.status(500).json({ message: 'Server error', error: error.message });
    }
});

module.exports = router;