// const express = require('express');
// const router = express.Router();
// const Employee = require('../../models/Employee');
// const Attendance = require('../../models/Attendance');
// const { authenticateUser, requireAdmin } = require('../../middleware/authMiddleware');

// router.get('/', authenticateUser, requireAdmin, async (req, res) => {
//     try{
//         const totalEmployees = await Employee.countDocuments();

//         const activeEmployees = await Employee.countDocuments({ status: 'active' });

//         const today = new Date();
//         today.setHours(0, 0, 0, 0);

//         const todayAttendance = await Attendance.aggregate([
//             {
//                 $match: {
//                     dat: {
//                         $gte: today,
//                         $lt: new Date(today.getTime() + 24 * 60 * 60 * 1000)
//                     }
//                 }
//             },
//             {
//                 $group:{
//                     _id: '$status',
//                     count: { $sum: 1 }
//                 }
//             }
//         ]);

//         const attendanceSummary = {};
//         todayAttendance.forEach(item => {
//             attendanceSummary[item._id] = item.count;
//         });

//         res.json({
//             totalEmployees,
//             activeEmployees,
//             attendanceSummary
//         });
//     }catch(error){
//         res.status(500).json({ message: 'Error fetching data', error: error.message })
//     }
// });


// module.exports = router;

const express = require('express');
const router = express.Router();
const Employee = require('../../models/Employee');
const Attendance = require('../../models/Attendance');
const { authenticateUser, requireAdmin } = require('../../middleware/authMiddleware');

router.get('/', authenticateUser, requireAdmin, async (req, res) => {
    try {
        const totalEmployees = await Employee.countDocuments();
        const activeEmployees = await Employee.countDocuments({ status: 'active' });
        
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        const attendanceRecords = await Attendance.aggregate([
            {
                $match: {
                    date: {
                        $gte: today,
                        $lt: new Date(today.getTime() + 24 * 60 * 60 * 1000)
                    }
                }
            },
            {
                $group: {
                    _id: '$status',
                    count: { $sum: 1 }
                }
            }
        ]);

        const attendanceSummary = {};
        attendanceRecords.forEach(item => {
            attendanceSummary[item._id] = item.count;
        });

        res.json({ totalEmployees, activeEmployees, attendanceSummary });
    } catch (error) {
        res.status(500).json({ message: 'Error fetching data', error: error.message });
    }
});

module.exports = router;
