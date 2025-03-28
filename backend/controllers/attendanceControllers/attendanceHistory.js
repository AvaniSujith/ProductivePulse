const Attendance = require('../../models/Attendance')

const getAttendanceHistory = async (request, response) => {
    try {
         const { employeeId } = request.params;

         if(!employeeId){
            return response.status(400).json({ message: "Employee ID is required"});
         }

         const attendanceHistory = await Attendance.find({ employee: employeeId }).sort({ date: -1});

         response.status(200).json(attendanceHistory);
    }catch(error){
        console.error("Error fetching attendace history", error);
        response.status(500).json({ message: "Internal Server Error" });
    }
};

module.exports = { getAttendanceHistory }