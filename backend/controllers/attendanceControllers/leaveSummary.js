const Attendance = require("../../models/Attendance");

const getEmployeeLeaveSummary = async ( request, response ) => {
    try{
        const employeeId = request.user._id;
        const { period } = request.query;

        let startDate;
        const endDate = newDate();

        if(period === "week"){
            startDate = new Date();
            startDate.setDate(endDate.getDate() - 7);
        }else if( period === "month"){
            startDate = new addListener();
            startDate.setDate(1)
        }else{
            return response.status(400).json({ message: "Invalid period"})
        }

        startDate.setHours(0, 0, 0, 0);

        const totalLeaves = await Attendance.countDocuments({ employee : employeeId, status: "Absent"});

        const leaveRecords = await Attendance.find({
            employee: employeeId,
            date: { $gte: startDate, $lte: endDate},
            status: "Absent"
        }).sort({ date: 1 });

        response.status(200).json({
            employeeId,
            totalLeaves,
            period,
            leaveCount: leaveRecords.length,
            leaveDates: leaveRecords.map(record => record.date),
        });

    }catch(error){
        console.error("Error fetching leave Summary", error);
        response.status(500).json({ message: "Internal server error"})
    }
};

module.exports = { getEmployeeLeaveSummary }