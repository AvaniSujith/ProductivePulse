const Attendance = require('../../models/Attendance');

const markCheckOut = async (request, response) => {
    try{
        const { employeeId } = request.body;

        if(!employeeId){
            return response.status(400).json({ message: "Employee ID is required"})
        }

        const today = new Date().setHours(0, 0, 0, 0);

        const attendance = await Attendance.findOne({ employee: employeeId, date: today});

        // if(!attendance || !attendance.checkInTime){
        //     return response.status(400).json({ message: "Check-in required before check-out"})
        // }

        if(!attendance || attendance.sessions.length === 0){
            return response.status(400).json({ message: "Checkin required before check out"})
        }

        const lastSession = attendance.sessions[attendance.sessions.length - 1];

        if(lastSession.checkOutTime){
            return response.status(400).json({ message: "Already checked out"})
        }

        lastSession.checkOutTime = new Date();
        // attendance.status = "Checked-Out";

        await attendance.save();

        response.status(200).json({ message: "Checked out successfully", attendance});

    }catch(error){
        console.error("Error marking check-out", error);
        response.status(500).json({ message: "Internal Server Error" })
    }
}

module.exports = { markCheckOut }