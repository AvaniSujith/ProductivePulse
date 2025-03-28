const Attendance = require("../../models/Attendance");

const startBreak = async (request, response) => {
    try {
        const  { employeeId, breakType} = request.body;

        if(!employeeId || !breakType){
            return response.status(400).json({ message: "Employee ID and break type are required"});
        }

        const today = new Date().setHours(0, 0, 0, 0);
        const attendance = await Attendance.findOne({ employee: employeeId, date: today});

        if(!attendance){
            return response.status(400).json({ message: "Check-in required to take break"})
        }

        const lastBreak = attendance.breaks[attendance.breaks.length -1];

        if(lastBreak && !lastBreak.endTime){
            return response.status(400).json({ message: "End your current break before next break"})
        }

        attendance.breaks.push({ type: breakType, startTime: new Date(), endTime: null });
        attendance.status = "On Break";

        await attendance.save();
        response.status(200).json({ message: "Break started successfully", attendance})
    }catch(error){
        console.error("Error starting break", error);
        response.status(500).json({ message: "Internal server error"})
    }
};

const endBreak = async (request, response) => {
    try{
        const { employeeId } = request.body;

        if(!employeeId){
            return response.status(400).json({ message: "Employee ID is required"})
        }

        const today = new Date().setHours(0, 0, 0, 0);
        const attendance = await Attendance.findOne({ employee: employeeId, date: today });

        if(!attendance){
            return response.status(400).json({ message: "No active break" });
        }

        const lastBreak = attendance.breaks[attendance.breaks.length - 1];

        if(!lastBreak || lastBreak.endTime){
            return response.status(400).json({ message: "No ongoing break to end"});
        }

        lastBreak.endTime = new Date();
        attendance.status = "Checked-In";

        await attendance.save();
        response.status(200).json({ message: "Break ended successfully", attendance});
    }catch(error){
        console.error("Error ending break", error);
        response.save(500).json({message:"Internal server error"})
    }
}

module.exports = { startBreak, endBreak};