const Attendance = require("../../models/Attendance");
const Employee = require("../../models/Employee");

const getDailyAttendance = async (request, response) => {
    // try {
    //     const { date } = request.query;

    //     const selectedDate = new Date(date);
    //     selectedDate.setHours(0, 0, 0, 0);

    //     const attendanceRecords = await Attendance.find({ date: selectedDate, status: "Present" })
    //         .populate("employee", "name email role");

    //         response.status(200).json({ date, presentEmployees: attendanceRecords });

    // }catch(error){
    //     console.error("error fetching daily attedance:", error);
    //     response.status(500).json({ message: "Internal Server error"})
    // }

    try{
        const { date } = request.query;

        const selectedDate = new Date(date);
        selectedDate.setHours(0, 0, 0, 0);

        const attedanceRecords = await Attendance.find({ date: selectedDate})
            .populate("employee", "name email role");

        const allEmployees = await Employee.find({}, "name email role");

        const checkedIn = [];
        const checkedOut = [];
        const onBreak = [];
        const absent = [];

        const attendedEmployeeIds = new Set(attedanceRecords.map(record => record.employee._id.toString()));

        attedanceRecords.forEach(record => {
            if(record.status === "Checked-In"){
                checkedIn.push(record.employee);
            }else if(record.status === "Checked-Out"){
                checkedOut.push(record.employee)
            }else if(record.status === "On Break"){
                onBreak.push(record.employee);
            }
        });

        response.status(200).json({
            date,
            summary: {
                totalEmployees: allEmployees.length,
                checkedIn: { count: checkedIn.length, employees: checkedIn },
                checkedOut: { count: checkedOut.length, employees: checkedOut },
                onBreak: { count: onBreak.length, employees: onBreak },
                absent: { count: absent.length, employees: absent }
            }
        });
    }catch(error){
        console.error("error fetching daily attendance", error);
        response.status(500).json({ message: "Internal server error"});
    }
};

module.exports = { getDailyAttendance };