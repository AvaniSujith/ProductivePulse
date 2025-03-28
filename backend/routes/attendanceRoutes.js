const express = require("express");
const router = express.Router();
// const { checkIn, checkOut, getAttendanceHistory} = require("../controllers/attendanceControllers");
// const { authenticateUser, requireAdmin }= require("../middleware/authMiddleware");
const { authenticateUser, requireAdmin} = require("../middleware/authMiddleware");

const { getAttendanceHistory } = require('../controllers/attendanceControllers/attendanceHistory');
const {markCheckIn} = require("../controllers/attendanceControllers/checkIn");
const {markCheckOut} = require("../controllers/attendanceControllers/checkOut");
const {getDailyAttendance} = require("../controllers/attendanceControllers/dailyAttendance");
const { getEmployeesWithMostLeaves }= require("../controllers/attendanceControllers/mostLeaves");
const { getEmployeeLeaveSummary }= require('../controllers/attendanceControllers/leaveSummary');
// const { calculateWorkHours } = require('../controllers/attendanceControllers/summaryController');
const { startBreak, endBreak } = require('../controllers/attendanceControllers/breakControllers')

router.post("/checkin", authenticateUser, markCheckIn);
router.post("/checkout", authenticateUser, markCheckOut);

router.get('/daily-summary', authenticateUser, requireAdmin, getDailyAttendance);
router.get("/most-leaves", authenticateUser, requireAdmin, getEmployeesWithMostLeaves);
router.get("/history/:employeeId", authenticateUser, getAttendanceHistory);
router.get("/leave-summary", authenticateUser, getEmployeeLeaveSummary);

router.post("/start-break", authenticateUser, startBreak);
router.post("/end-break", authenticateUser, endBreak)

module.exports = router; 